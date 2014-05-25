function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
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
        top: "20%",
        font: {
            fontSize: "12sp"
        },
        id: "currentDate"
    });
    $.__views.__alloyId1.add($.__views.currentDate);
    $.__views.empezarTexto = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: Alloy.CFG.purple,
        top: "30%",
        font: {
            fontFamily: Alloy.CFG.SegoeLight
        },
        text: "Empezar la novena para hoy",
        id: "empezarTexto"
    });
    $.__views.__alloyId1.add($.__views.empezarTexto);
    $.__views.buttonOraciones = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: Alloy.CFG.maroon,
        bottom: "20%",
        font: {
            fontFamily: Alloy.CFG.SegoeLight
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
            fontFamily: Alloy.CFG.SegoeLight
        },
        text: "Canciones",
        id: "buttonCanciones"
    });
    $.__views.__alloyId1.add($.__views.buttonCanciones);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var currentDateString = Alloy.CFG.currentDay + " de ";
    $.currentDate.text = currentDateString;
    $.empezarTexto.addEventListener("click", function() {
        alert("empezarTexto");
    });
    $.buttonOraciones.addEventListener("click", function() {
        alert("buttonOraciones");
    });
    $.buttonCanciones.addEventListener("click", function() {
        alert("buttonCanciones");
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;