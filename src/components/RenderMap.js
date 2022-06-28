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

            // const popupOverLayers = {
            //     "title": "{NP}",
            //     "content": [{
            //         "type": "fields",
            //         "fieldInfos": [
            //             {
            //                 "fieldName": "NP",
            //                 "label": "Номер Поля",
            //                 "isEditable": true,
            //                 "tooltip": "",
            //                 "visible": true,
            //                 "format": null,
            //                 "stringFieldOption": "text-box"
            //             }
            //         ]
            //     }]
            // }

            const popupLayers = {
                "title": "{category}",
                "content": [{
                  "type": "fields",
                  "fieldInfos": [
                    {
                        "fieldName": "cadnum",
                        "label": "Cadnum",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "purpose_code",
                        "label": "Purpose Code",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "purpose",
                        "label": "Purpose",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "use_",
                        "label": "Use",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "area",
                        "label": "Area",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "unit_area",
                        "label": "Unit Area",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "ownershipcode",
                        "label": "Ownershipcode",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "ownership",
                        "label": "Ownership",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "id",
                        "label": "Id",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "address",
                        "label": "Address",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "ObjectId",
                        "label": "Object Id",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "Shape__Area",
                        "label": "Shape Area",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    },
                    {
                        "fieldName": "Shape__Length",
                        "label": "Shape Length",
                        "isEditable": true,
                        "tooltip": "",
                        "visible": true,
                        "format": null,
                        "stringFieldOption": "text-box"
                    }
                  ]
                }]
            }

            const myLayer = new FeatureLayer({
                url: "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0",               
                popupTemplate: popupLayers
            });
            map.add(myLayer);

            const url = "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0";
            CreateLayer(url);
           
            const secLayer = new FeatureLayer({
                url: "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/secondexport/FeatureServer/0",
                popupTemplate: popupLayers
            });
            map.add(secLayer);

            if(name === "Show Layer 1") {
                myLayer.when(function(){
                    view.extent = myLayer.fullExtent;
                });
            }
            if(name === "Show Layer 2") {
                secLayer.when(function(){
                    view.extent = secLayer.fullExtent;
                });
            }
            view.center = [28.841, 49.98];
            view.zoom = 8;

        }).catch((err) => console.error(err));
    });
    return (<div id="container"></div>);
}

export default RenderMap;

