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

getStuff();
var thingCounter = 0;

function getStuff() {
    load("klanten.json", function (response) {
        var registratie = JSON.parse(response);
        var mainArray = [];
        if (thingCounter < registratie.length) {
                mainArray[0] = registratie[thingCounter].name;
                mainArray[1] = registratie[thingCounter].address;
                mainArray[2] = registratie[thingCounter].zip;
                mainArray[3] = registratie[thingCounter].phone;
                mainArray[4] = registratie[thingCounter].place;
                mainArray[5] = registratie[thingCounter].email;
                createTab(mainArray);
        }

        if (thingCounter >= 0) {
            thingCounter++;
            newColumn = 0;
            getStuff();
        }
    })
}

let container = document.getElementById("tableContainer")
let containTable = document.createElement("table");
containTable.id = "infoContainer";
container.append(containTable);

var newColumn = 0;
var rowNum = 0;

function createTab(mainArray) {
    var infoTr = document.createElement("tr");
    infoTr.id = "infoRow";
    infoTr.class = "rows";

    var tr = document.createElement("tr");
    tr.id = "row" + [rowNum];
    tr.class = "rows";
    rowNum++;
    
    if (newColumn == 0) {
        var thingArray = ["Naam", "Adress", "Zip", "Nummer", "Woonplaats", "Email"];
        for (var e = 0; e < thingArray.length; e++) {
            var th = document.createElement("th")
            th.className = "tableNames";
            th.innerHTML = thingArray[e];
            infoTr.append(th);
            containTable.append(infoTr);
            newColumn = 1;
        }
    }
    if (newColumn !== 0) {
        for (var x = 0; x < mainArray.length; x++) {
            var td = document.createElement("td");
            td.id = "cell" + x;
            td.className = "td"
            if(mainArray[x] !== undefined){
                td.innerHTML = mainArray[x];
            }
            else{
                td.innerHTML = "No data!";
            }
            tr.append(td);
        }
    }
    containTable.append(tr);
}