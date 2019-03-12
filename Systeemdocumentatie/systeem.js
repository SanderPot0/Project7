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
    load("../JSON/sysDocu.json", function (response) {
        var registratie = JSON.parse(response);
        var mainArray = [];
        if (thingCounter < registratie.length) {
            var subTags = registratie[thingCounter].hardware;
            console.log(registratie[thingCounter].hardware);
            for (var i = 0; i < subTags.length; i++) {
                mainArray[0] = registratie[thingCounter].name;
                mainArray[1] = registratie[thingCounter].location;
                mainArray[2] = registratie[thingCounter].os;
                // mainArray[3] = subTags[i].case;
                // mainArray[4] = subTags[i].motherboard;
                // mainArray[5] = subTags[i].cpu;
                // mainArray[6] = subTags[i].ram;
                // mainArray[7] = subTags[i].graphicscard;
                // mainArray[8] = subTags[i].soundcard;
                // mainArray[9] = subTags[i].harddisk;
                mainArray[3] = registratie[thingCounter].apps;
                mainArray[4] = registratie[thingCounter].security;
                subTags = registratie[thingCounter].users;
                mainArray[5] = subTags[i].user;
                mainArray[6] = subTags[i].pass;
                mainArray[7] = subTags[i].rights;
                mainArray[8] = registratie[thingCounter].other;
                createTab(mainArray);
            }
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
        var thingArray = ["Naam", "Locatie", "OS", "Apps", "Security", "User", "Password", "Rights", "Other"];
        for (var e = 0; e < thingArray.length; e++) {
            var th = document.createElement("th")
            th.className = "tableNames";
            th.innerHTML = thingArray[e];
            infoTr.append(th);
            containTable.append(infoTr);
            newColumn = 1;
            //"Case", "Motherboard", "Cpu", "Ram", "Graphicscard", "Soundcard", "Harddisk"
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