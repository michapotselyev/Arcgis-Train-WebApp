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
                'esri/widgets/Legend',
            ]
        ).then(([esriConfig, Map, MapView, FeatureLayer, Legend]) => {
            esriConfig.apiKey = API;

            const map = new Map({
                basemap: "arcgis-topographic"
            });

            const view = new MapView({
                map: map,
                center: [28.841, 49.98],
                zoom: 8,
                container: "container"
            });

            let Layer = new FeatureLayer();
            const url = "https://mgagro.gismg.com:6443/arcgis/rest/services/PORTAL_30/MS_MAK_3/MapServer/";
            Layer.url = url;
            map.add(Layer);
            CreateLayer(url);
           
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

