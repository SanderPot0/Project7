function load(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };  
    xobj.send(null);
}


load("voorbeeld.xml", function (response) {
    var file = response;
    console.log(file);
    document.getElementById("test").innerHTML = file;
})