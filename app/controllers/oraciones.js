
$.headerInternal.brand.setText('Oraciones');

$.headerInternal.backToMenu.addEventListener('click', function (e) {
	Alloy.createController("index").getView().open();
});


/*
 * open window
 */
$.oraciones.open();