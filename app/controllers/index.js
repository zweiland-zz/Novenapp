
var currentDateString = Alloy.CFG.currentDay + " de ";

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

$.index.open();