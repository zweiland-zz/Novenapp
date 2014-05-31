
$.headerInternal.brand.setText('Canciones');

$.headerInternal.backToMenu.addEventListener('click', function (e) {
	Alloy.createController("index").getView().open();
});



/*
 * open window
 */
$.canciones.open();