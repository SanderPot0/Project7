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

// request.send();

load("test.csv", function (response) {
    var file = response;
    for(var i = 0; i < file.length; i++){
        file = file.replace(",", " ")
    }
    var rowDetect = 0;
    var shitArray = [];
        console.log(file[0]);
        if(rowDetect == 4){
            shitArray[0] = file + "\n";
            document.getElementById("input").innerHTML = "<div>" + shitArray + "</div>";
            rowDetect == 0;
        }
        else{
            shitArray[0] = file;
            console.log(shitArray);
            document.getElementById("input").innerHTML+= "<div>" + shitArray + "</div>";
        }
        rowDetect++;
})