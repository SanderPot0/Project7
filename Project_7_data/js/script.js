// Function to read local JSON files
function loadJSON(url ,callback){
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', url, true);
  xobj.onreadystatechange = function () {
    if(xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

// How to use the function (with url and callback


// Example urenregistratie.json
loadJSON('json/urenregistratie.json', function(response) {
	var urenregistratie = JSON.parse(response);
	urenregistratie.forEach(function(person){
	  // Person is the full object with all data
    console.log("--------------");
    console.log(person.name);

    // Inside person there is another object to loop over
	  person.log.forEach(function(work){
	    console.log(" ");
	    console.log(work.date);
	    console.log(work.hours);
	    console.log(work.description);
    })
  })
});


// Example klanten.json
loadJSON("json/klanten.json", function(response){
  var klanten = JSON.parse(response);
  klanten.forEach(function(customer){
    console.log("--------------");
    console.log(customer.name);
  })
});


// Example systeemdocumentatie.json
loadJSON("json/systeemdocumentatie.json", function(response){
  var systemen = JSON.parse(response);
  systemen.forEach(function(system){
    console.log("--------------");
    console.log(system.name);
  })
});


// Example facturatie.json
loadJSON("json/facturatie.json", function(response){
  var facturatie = JSON.parse(response);
  facturatie.forEach(function(factuur){
    console.log("--------------");
    console.log(factuur.customer);
  })
});

