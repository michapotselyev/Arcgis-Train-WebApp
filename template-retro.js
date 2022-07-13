// {
//     "aggregateGeometries":null,
//     "geometry":{
//         "spatialReference":{
//             "latestWkid":3857,
//             "wkid":102100
//         },
//         "rings":[[
//             [3651014.656037508,6183679.151243845],
//             [3650785.3449526527,6183602.71421556],
//             [3650632.4708960825,6183602.71421556],
//             [3650479.596839512,6183602.71421556],
//             [3650403.159811227,6183602.71421556],
//             [3650403.159811227,6183679.151243845],
//             [3650326.722782942,6183984.899356985],
//             [3650403.159811227,6183984.899356985],
//             [3650326.722782942,6184443.521526696],
//             [3650250.285754657,6184825.706668122],
//             [3650173.848726372,6185437.202894403],
//             [3650097.4116980867,6185895.825064113],
//             [3650173.848726372,6185972.2620923985],
//             [3650173.848726372,6186048.699120684],
//             [3650556.0338677973,6186048.699120684],
//             [3651014.6560375085,6186125.136148969],
//             [3651014.6560375085,6185895.825064113],
//             [3651091.0930657936,6185666.513979258],
//             [3651091.0930657936,6185590.076950973],
//             [3651167.5300940787,6185207.891809547],
//             [3651167.5300940787,6184902.143696407],
//             [3651320.404150649,6184061.336385271],
//             [3651320.404150649,6183984.899356985],
//             [3651320.404150649,6183832.025300415],
//             [3651320.404150649,6183679.151243845],
//             [3651091.0930657936,6183679.151243845],
//             [3651014.6560375085,6183679.151243845]
//         ]]
//     },
//     "symbol":null,
//     "attributes":{
//         "cadnum":"3520387300:02:000:9102",
//         "category":"Землі сільськогосподарського призначення",
//         "purpose_code":"1.01",
//         "purpose":"01.01 Для ведення товарного сільськогосподарського виробництва",
//         "use_":"ведення товарного сільськогосподарського виробництва",
//         "area":104.47219848632812,
//         "unit_area":"га",
//         "ownershipcode":200,
//         "ownership":"Комунальна власність",
//         "id":590863749,
//         "address":null,
//         "ObjectId":1402,
//         "Shape__Area":2374431.0546875,
//         "Shape__Length":6797.937735769375
//     },
//     "popupTemplate":null
// }

//Будівельників бульвар, Кам'янське, Дніпропетровська область


 // const customSearchSource = new SearchSource({
//     placeholder: "Enter Cadnum...",
//     getSuggestions: (params) => {
//         console.log("SUGGESTION: ",params);
//         // return esriRequest(url + "search/", {
//         //     query: {
//         //     q: params.suggestTerm.replace(/ /g, "+"),
//         //     limit: 6,
//         //     lat: view.center.latitude,
//         //     lon: view.center.longitude
//         //     },
//         //     responseType: "json"
//         // }).then((results) => {
//         //     return results.data.features.map((feature) => {
//         //         return {
//         //             key: "name",
//         //             text: feature.properties.label,
//         //             sourceIndex: params.sourceIndex
//         //         };
//         //     });
//         // });
//     },
//     getResults: (params) => {
//         console.log("RESULT: ",params);
//         // const operation = params.location ? "reverse/" : "search/";
//         // let query = {};
//         // if (params.location) {
//         //     query.lat = params.location.latitude;
//         //     query.lon = params.location.longitude;
//         // } else {
//         //     query.q = params.suggestResult.text.replace(/ /g, "+");
//         //     query.limit = 6;
//         // }
//         // return esriRequest(url + operation, {
//         //     query: query,
//         //     responseType: "json"
//         // }).then((results) => {
//         //     const searchResults = results.data.features.map((feature) => {
//         //         const graphic = new Graphic({
//         //             geometry: new Point({
//         //                 x: feature.geometry.coordinates[0],
//         //                 y: feature.geometry.coordinates[1]
//         //             }),
//         //             attributes: feature.properties
//         //         });
//         //         const buffer = geometryEngine.geodesicBuffer(graphic.geometry, 100, "meters");
//         //         const searchResult = {
//         //             extent: buffer.extent,
//         //             feature: graphic,
//         //             name: feature.properties.label
//         //         };
//         //         return searchResult;
//         //     });
//         //     return searchResults;
//         // });
//     }
// });
// const searchWidget = new Search({
//     view: view,
//     locationEnabled: false,
//     sources: [customSearchSource],
//     includeDefaultSources: false
// });
// view.ui.add(searchWidget, {
//     position: "top-left", 
//     index: 0
// });