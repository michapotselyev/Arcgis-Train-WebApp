const popUp = require('./pop-up-template.json');
const FieldsInfo = require('./pop-up-fields-info.json');
const request = new XMLHttpRequest();
var data = {};

export const CreateLayer = (url) => {
    const layerArr = [];

    const array = url.split("/");
    if (isNaN(array[array.length - 1])) url = url + "/";

    const jsonData = url + "?f=pjson";
    request.open('GET', jsonData);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        data = request.response;
        if (data.error) {
            return (alert("Error " + data.error.code + ": " + data.error.message));
        }

        if (isNaN(array[array.length - 1]) || array[array.length - 1] === "") {
            const layers = data.layers;
            for (let i = 0; i !== layers.length; i++) {
                layerArr.push(url + layers[i].id + "?f=pjson");
                // console.log(layerArr[i]);
            }
        }

        data = {};

        const jsonData1 = layerArr[0];
        request.open('GET', jsonData1);
        request.responseType = 'json';
        request.send();
        request.onload = function() {
            data = request.response;
            console.log(data.fields);
        }
        
    }
    // console.log(layerArr);
}


// if (element.subLayerIds) {
//     element.subLayerIds.forEach(child => {
//         // TO DO child layers render + pop up for them //
//     });
// }

// const myLayer = new FeatureLayer({
//     url: "https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0",               
//     popupTemplate: popupLayers
// });


