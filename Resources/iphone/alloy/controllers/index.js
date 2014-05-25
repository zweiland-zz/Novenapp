function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#f8f8f8",
        top: 0,
        height: Ti.UI.FILL,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Alloy.createController("partials/header", {
        id: "__alloyId0",
        __parentSymbol: $.__views.index
    });
    $.__views.__alloyId0.setParent($.__views.index);
    $.__views.__alloyId1 = Ti.UI.createView({
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.currentDate = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        top: "15%",
        font: {
            fontSize: "10sp"
        },
        id: "currentDate"
    });
    $.__views.__alloyId1.add($.__views.currentDate);
    $.__views.empezarTexto = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: Alloy.CFG.purple,
        top: "35%",
        font: {
            fontFamily: Alloy.CFG.SegoeLight,
            fontSize: "16sp"
        },
        text: "Empezar la novena para hoy",
        id: "empezarTexto"
    });
    $.__views.__alloyId1.add($.__views.empezarTexto);
    $.__views.buttonOraciones = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: Alloy.CFG.maroon,
        bottom: "25%",
        font: {
            fontFamily: Alloy.CFG.SegoeLight,
            fontSize: "16sp"
        },
        text: "Oraciones",
        id: "buttonOraciones"
    });
    $.__views.__alloyId1.add($.__views.buttonOraciones);
    $.__views.buttonCanciones = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: Alloy.CFG.maroon,
        bottom: "10%",
        font: {
            fontFamily: Alloy.CFG.SegoeLight,
            fontSize: "16sp"
        },
        text: "Canciones",
        id: "buttonCanciones"
    });
    $.__views.__alloyId1.add($.__views.buttonCanciones);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentDate = Alloy.CFG.currentMonth + "/" + Alloy.CFG.currentDay + "/" + Alloy.CFG.currentYear;
    var currentDateString = Alloy.CFG.currentDay + " de " + Alloy.CFG.currentSpanishMonthName + " del " + Alloy.CFG.currentYear;
    $.currentDate.text = currentDateString;
    var fDate, lDate, cDate;
    var fDate = "12/16/" + Alloy.CFG.currentYear;
    var lDate = "12/24/" + Alloy.CFG.currentYear;
    var cDate = currentDate;
    fDate = Date.parse(fDate);
    lDate = Date.parse(lDate);
    cDate = Date.parse(cDate);
    var alert = Titanium.UI.createAlertDialog({
        title: "La novena no ha empezado!",
        message: "Si desea ver las oraciones individuales, \nvisite la sección de “Oraciones",
        buttonNames: [ "Cerrar", 'Ir a "Oraciones"' ],
        cancel: 0
    });
    alert.addEventListener("click", function(e) {
        Titanium.API.info("e = " + JSON.stringify(e));
        if (e.cancel === e.index || true === e.cancel) return;
        switch (e.index) {
          case 0:
            Titanium.API.info("Clicked button 0 (Cerrar)");
            break;

          case 1:
            Titanium.API.info('Clicked button 1 (Ir a "Oraciones") Now go to Oraciones page');
            break;

          default:        }
    });
    lDate >= cDate && cDate >= fDate ? TI.API.info("It's go time!") : alert.show();
    $.empezarTexto.addEventListener("click", function() {
        Ti.API.info("empezar");
    });
    $.buttonOraciones.addEventListener("click", function() {
        Ti.API.info("orraciones");
    });
    $.buttonCanciones.addEventListener("click", function() {
        Ti.API.info("canciones");
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;