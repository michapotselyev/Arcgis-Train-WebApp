export const CreateLayer = (url) => {
    url = String(url);
    const array = url.split();
    array.forEach(element => {
        console.log(element);
        console.log("\n");
    });
    const jsonData = url + "?f=pjson";
    const request = new XMLHttpRequest()
    request.open('GET', jsonData);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var data = request.response;
        console.log(data);
    }   
}

