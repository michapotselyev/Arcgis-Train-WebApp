import { useEffect } from 'react';
import { loadModules } from 'esri-loader';
import { CreateLayer } from '../modules/autoCreateLayer'
const API = "AAPK6e2e371c0cd645db955fffc84c955043hV8ZzZNODcMzp0t74BMMWQWj5Sa6Zo_y7Kdf_eTa9W3nvTZ5fcZF6qjcR0hIIPai";

const RenderMap = ({ name }) => {
    useEffect(() => {
        loadModules(
            [
                'esri/config',
                'esri/Map',
                'esri/views/MapView',
                'esri/layers/FeatureLayer',
                'esri/layers/Layer',
                'esri/widgets/Popup/PopupViewModel',
                'esri/widgets/Legend',
            ]
        ).then(([esriConfig, Map, MapView, FeatureLayer, Layer, PopupVM, Legend]) => {
            esriConfig.apiKey = API;

            const map = new Map({
                basemap: "arcgis-topographic",
                // infoWindow: {
                //     "popupWindow": false
                // }
            });

            const view = new MapView({
                map: map,
                center: [28.841, 49.98],
                zoom: 8,
                container: "container"
            });

            let layer = new FeatureLayer();
            const url = "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0";
            layer.url = url;
            map.add(layer);
            layer.when(function(){
                view.extent = layer.fullExtent;
            });
            // CreateLayer(url);
            console.log(view.popup);

            view.popup.autoOpenEnabled = false;
            view.on("click", function (event) { 
                document.getElementById('ms').getElementsByTagName('aside').infa.innerText = ""
                if (event.button === 0) {
                    view.whenLayerView(layer).then(function (layerView) {
                        const query = layerView.layer.createQuery();
                        query.geometry = view.toMap(event);
                        query.distance = 1;
                        query.units = "meters";
                        layerView.queryFeatures(query).then(
                            response => {
                                if (response.features.length > 0) {
                                    for (let i = 0; i < response.fields.length; i++) {
                                        if (response.fields[i].type === "string") {
                                            document.getElementById('ms').getElementsByTagName('aside').infa.innerText += JSON.stringify(response.fields[i].alias) 
                                                                                                                        + ": " 
                                                                                                                        + JSON.stringify(response.fields[i].name);
                                            document.getElementById('ms').getElementsByTagName('aside').infa.innerText += "\n";
                                        }  
                                    }
                                }
                            },
                            err => {
                                console.error(err);
                            }
                        );
                    });
                }
            });
            
            // CreateLayer(url);
           
            // if(name === "Show Layer 1") {
            //     myLayer.when(function(){
            //         view.extent = myLayer.fullExtent;
            //     });
            // }
            // if(name === "Show Layer 2") {
            //     secLayer.when(function(){
            //         view.extent = secLayer.fullExtent;
            //     });
            // }
            // view.center = [28.841, 49.98];
            // view.zoom = 8;

        }).catch((err) => console.error(err));
    });
    return (<div id="container"></div>);
}

export default RenderMap;

