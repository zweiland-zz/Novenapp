
$.headerInternal.brand.setText('Canciones');

// functions
function goBack(e) {
	$.canciones.close();
}

$.headerInternal.backToMenu.addEventListener('click', function (e) {
	goBack();
});

/*
 * open window
 */
$.canciones.open();