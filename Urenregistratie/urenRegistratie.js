function load(url, callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', url, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
        //   else if(xobj.status !== 200){
        //       console.error("SUCK  MY DICK");
        //   }
    };
    xobj.send(null);
}

load("../JSON/urenregistratie.json", function (response) {
    var registratie = JSON.parse(response);
    var length = registratie.length;
    createTab(registratie);

    registratie.forEach(function (person) {

    })
})


function createTab(klantenLength) {
    let container = document.getElementById("tableContainer")
    let containTable = document.createElement("table");
    containTable.id = "infoContainer";
    container.append(containTable);

    for (var i = 0; i < klantenLength.length + 1; i++) {
        var tr = document.createElement("tr");
        tr.id = "row" + [i];
        tr.class = "rows";
        if (i == 0) {
            for (var e = 0; e < klantenLength.length + 2; e++) {
                var thingArray = ["name", "date", "hours", "description"]
                var th = document.createElement("th")
                th.className = "tableNames";
                th.innerHTML = thingArray[e];
                tr.append(th);
            }
        }

            if (i >= 1) {
                for (var x = 0; x < thingArray.length; x++){
                    var td = document.createElement("td");
                    td.id = "cell" + [x];
                    td.className = "cells"
                    tr.append(td);
                }
            }
        containTable.append(tr);
    }
}