
var currentDate = Alloy.CFG.currentMonth + "/" + Alloy.CFG.currentDay + "/" + Alloy.CFG.currentYear;
var currentDateString = Alloy.CFG.currentDay + " de " + Alloy.CFG.currentSpanishMonthName + " del " + Alloy.CFG.currentYear;

$.currentDate.text = currentDateString;

$.empezarTexto.addEventListener("click", function(e){
	alert('empezarTexto');
});

$.buttonOraciones.addEventListener("click", function(e){
	alert('buttonOraciones');	
});

$.buttonCanciones.addEventListener("click", function(e){
	alert('buttonCanciones');
});

// If it's not December 16 - 24 of current year display alert
Ti.API.info(currentDate);

var dateFrom = "4/16/"+Alloy.CFG.currentYear;
var dateTo = "12/24/"+Alloy.CFG.currentYear;
var dateCheck = currentDate;

var d1 = dateFrom.split("/");
var d2 = dateTo.split("/");
var c = dateCheck.split("/");

var from  = new Date(d1[2], d1[1]-1, d1[0]);  // -1 because months are from 0 to 11
var to    = new Date(d2[2], d2[1]-1, d2[0]);
var check = new Date(c[2], c[1]-1, c[0]);

Ti.API.info(check > from && check < to);


$.index.open();