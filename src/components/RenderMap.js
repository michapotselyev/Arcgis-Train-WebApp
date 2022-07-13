import React, { useEffect, useState } from 'react';
import { loadModules } from 'esri-loader';
import { data } from '../modules/searchAndShowInfo';
var isOpened = false;
const API = "AAPK6e2e371c0cd645db955fffc84c955043hV8ZzZNODcMzp0t74BMMWQWj5Sa6Zo_y7Kdf_eTa9W3nvTZ5fcZF6qjcR0hIIPai";

// Компонент отрисовки карты и получения данных с нее
const RenderMap = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        // Загрузка нужных модулей
        loadModules(
            [
                'esri/config',
                'esri/Map',
                'esri/views/MapView',
                'esri/layers/FeatureLayer'
            ]
        ).then(([ esriConfig, Map, MapView, FeatureLayer ]) => {
            // Подключение API
            esriConfig.apiKey = API;

            // Создание образа карты
            const map = new Map({ basemap: "arcgis-topographic" });

            // Создание окна карты и настройки отображения карты
            const view = new MapView({
                map: map,
                center: [ 28.841, 49.98 ],
                zoom: 8,
                container: "container",
            });

            // Создание слоя
            let layerID = new FeatureLayer({
                url: "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0",
                outFields: ["*"]
            });
            map.add(layerID);

            // Переход к слою
            layerID.when(function() {
                view.extent = layerID.fullExtent;
            });

            // Настройки отображения pop up
            view.popup.autoOpenEnabled = false;

            setIsLoaded(true);

            // Получение данных с сервиса и обработка при нажатии на поле
            view.on("click", function (event) {
                if (event.button === 0) {
                    view.hitTest(event).then(function (response) {
                        if (!isOpened) {
                            view.popup.close();
                            const placeTo =  document.getElementById('infa').children;
                            for (let j = 0; j < placeTo.length; j++) if (placeTo[j].id === "textfield") placeTo[j].innerText = "";
                        }
                        if (response.results.length !== 1) {
                            var graphic = response.results.filter(function(result) {
                                return result.graphic.layer === layerID;
                            })[0].graphic;
                            if (data.a === graphic.attributes.cadnum) {
                                view.popup.close();
                                const placeTo =  document.getElementById('infa').children;
                                for (let j = 0; j < placeTo.length; j++) if (placeTo[j].id === "textfield") placeTo[j].innerText = "";
                                data.a = "";
                            }
                            else {
                                data.a = graphic.attributes.cadnum;
                                const attributes = graphic.attributes;
                                view.popup.open({ location: graphic.geometry.centroid, features: [graphic] });
                                isOpened = true;
                                const placeTo =  document.getElementById('infa').children;
                                for (let j = 0; j < placeTo.length; j++) {
                                    if (placeTo[j].id === "textfield") {
                                        placeTo[j].innerText = "Кадастровый номер: " + attributes.cadnum + "\n" +
                                                               "Назначение: " + attributes.category + "\n" +
                                                               "Использование: " + attributes.use_ + "\n" +
                                                               "Площадь: " + attributes.area +  attributes.unit_area + "\n" +
                                                               "Собственность: " + attributes.ownership + "\n";
                                
                                    }
                                }
                            }
                        }
                        else {
                            view.popup.close();
                            const placeTo =  document.getElementById('infa').children;
                            for (let j = 0; j < placeTo.length; j++) if (placeTo[j].id === "textfield") placeTo[j].innerText = "";
                            data.a = "";
                        }
                    });
                }
            });

        // Обработка ошибок
        }).catch((err) => console.error(err));
    });

    // Отрисовка блока и карты в нем
    if (!isLoaded) {
        return (
            <div className="mapdiv" id="mdiv">
                <div>Загрузка...</div>
            </div>
        )
    }
    else {
        return (
            <div className="mapdiv" id="mdiv">
                <div id="container"></div>
            </div>
        );
    }
    
}

export default RenderMap;
