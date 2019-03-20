function load(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/CSV");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };  
    xobj.send(null);
}

// request.send();

load("test.csv", function (response) {
    var file = response;
    for(var i = 0; i < file.length; i++){
        file = file.replace(",", " ")
    }
    file = file.split(/\r\n|\n/);
        console.log(file[0]);
            console.log(file);
            for(var i = 0; i < file.length; i++){
                document.getElementById("input").innerHTML+= "<h4 id='heck'>" + file[i] +"</h4>"  + "<br>";
            }
           
})