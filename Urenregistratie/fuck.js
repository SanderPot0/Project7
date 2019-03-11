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
        function getStuff(){
            load("../JSON/urenregistratie.json", function (response) {
            var registratie = JSON.parse(response);
            var mainArray = [];
            var subTags = registratie[thingCounter].urenLog;
            for (var i = 0; i < subTags.length; i++) {
                mainArray[0] = registratie[thingCounter].name;
                mainArray[1] = subTags[i].date;
                mainArray[2] = subTags[i].hours;
                mainArray[3] = subTags[i].description;
                // console.log(mainArray);
                createTab(mainArray);
            }

            if(thingCounter == 0){
                thingCounter++;
                newColumn = 0;
                getStuff();
            }
            // console.log(thingCounter);
        })
    }
    

let container = document.getElementById("tableContainer")
let containTable = document.createElement("table");
containTable.id = "infoContainer";
container.append(containTable);

var newColumn = 0;
var rowNum = 0;
function createTab(mainArray) {
    // for (var i = 0; i < 1; i++) {
        // console.log(klantenLength.length);
        var tr = document.createElement("tr");
        tr.id = "row" + [rowNum];
        rowNum++;
        tr.class = "rows";
        
        if (newColumn == 0) {
            var thingArray = ["Name", "Date", "Hours", "Description"]
            for (var e = 0; e < thingArray.length; e++) {
                var th = document.createElement("th")
                th.className = "tableNames";
                th.innerHTML = thingArray[e];
                tr.append(th);
                newColumn = 1;
            }
        } else if(newColumn !== 0) {
            for (var x = 0; x < 4; x++) {
                    var td = document.createElement("td");
                    td.id = "cell" + x;
                    td.className = "td"
                    console.log(mainArray);
                    td.innerHTML = mainArray[x];
                    tr.append(td);
            }
        }
        containTable.append(tr);
    }
// }