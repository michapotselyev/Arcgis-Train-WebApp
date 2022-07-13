import React, { useEffect, useState } from "react";
import { data } from "../modules/searchAndShowInfo";
const urlToGetData = 
"https://services7.arcgis.com/J3hAXnMntfOSlR8o/ArcGIS/rest/services/export/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=false&resultRecordCount=0&f=json";
var prev = { storage: "", id: "" }
var flag = false;

// Компонент таблицы карты
const MapTable = () => {

    data.registerListener(function(val) {
        if (val !== "") {
            if (document.getElementById(val)) {
                const place = document.getElementById(val);
                if (prev.storage !== "") {
                    document.getElementById(prev.id).className = prev.storage;
                }
                if (!flag) {
                    place.previousSibling.scrollIntoView();
                }
                flag = false;
                prev.storage = place.className;
                prev.id = val;
                place.className = "edit " + place.className;
            }
            else {
                if (prev.storage !== "") {
                    document.getElementById(prev.id).className = prev.storage;
                }
            }
        }
        else {
            if (prev.storage !== "") {
                document.getElementById(prev.id).className = prev.storage;
            }
        }
    });

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsVal, setItemsVal] = useState([]);

    useEffect(() => {
        fetch(urlToGetData).then(res => res.json()).then((result) => {
            setIsLoaded(true);
            setItems(result.fields);
            setItemsVal(result.features);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    const newArray = items.filter(function(f) { 
        return (
            f.name !== 'id' 
            && f.name !== 'ownershipcode'
            && f.name !== 'ObjectId' 
            && f.name !== 'Shape__Area' 
            && f.name !== 'Shape__Length' 
            && f.name !== 'purpose_code'
            && f.name !== 'use_'
            && f.name !== 'unit_area'
        );
    });

    var con = -1;
    const head = newArray.map(item => (<th key={item.name}>{item.name}</th>));
    const bady = itemsVal.map(items => <tr key={items.attributes.cadnum} id={items.attributes.cadnum} className={"a" + (con + 1)}>
                                            <th>{con += 1}</th>
                                            <th>{items.attributes.cadnum}</th>
                                            <th>{items.attributes.category}</th>
                                            <th>{items.attributes.purpose}</th>
                                            <th>{items.attributes.area} {items.attributes.unit_area}</th>
                                            <th>{items.attributes.ownership}</th>
                                            <th>{items.attributes.address}</th>
                                        </tr>);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } 
    else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } 
    else {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        {head}
                    </tr>
                </thead>
                <tbody>
                    {bady}
                </tbody>
            </table>
        );
    }

}

export default MapTable;
