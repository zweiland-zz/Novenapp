
var currentDate = Alloy.CFG.currentMonth + "/" + Alloy.CFG.currentDay + "/" + Alloy.CFG.currentYear;
var currentDateString = Alloy.CFG.currentDay + " de " + Alloy.CFG.currentSpanishMonthName + " del " + Alloy.CFG.currentYear;
$.currentDate.text = currentDateString;

// If it's not December 16 - 24 of current year display alert
var fDate,lDate,cDate;

var fDate = "12/16/" + Alloy.CFG.currentYear;
var lDate = "12/24/" + Alloy.CFG.currentYear;
var cDate = currentDate;

fDate = Date.parse(fDate);
lDate = Date.parse(lDate);
cDate = Date.parse(cDate);

var alert = Titanium.UI.createAlertDialog({ title: 'La novena no ha empezado!', message: 'Si desea ver las oraciones individuales, 
visite la sección de “Oraciones', buttonNames: ['Cerrar', 'Ir a "Oraciones"'], cancel: 0 });

alert.addEventListener('click', function(e) { 
	Titanium.API.info('e = ' + JSON.stringify(e));
	
   //Clicked cancel, first check is for iphone, second for android
   if (e.cancel === e.index || e.cancel === true) {
      return;
   }

   //now you can use parameter e to switch/case
   switch (e.index) {
      case 0: Titanium.API.info('Clicked button 0 (Cerrar)');
      break;

      //This will never be reached, if you specified cancel for index 1
      case 1: Titanium.API.info('Clicked button 1 (Ir a "Oraciones") Now go to Oraciones page');
      			Alloy.createController("oraciones").getView().open();	
      break;

      default:
      break;
  }
});

if((cDate <= lDate && cDate >= fDate)) {
    TI.API.info("It's go time!");
} else {
	alert.show();
}

// Click Events

$.empezarTexto.addEventListener("click", function(){
	Ti.API.info("empezar");
});

$.buttonOraciones.addEventListener("click", function(){
	Ti.API.info("Oraciones");
	Alloy.createController("oraciones").getView().open();
});
$.buttonCanciones.addEventListener("click", function(){
	Ti.API.info("Canciones");
	Alloy.createController("canciones").getView().open();
});

$.index.open();