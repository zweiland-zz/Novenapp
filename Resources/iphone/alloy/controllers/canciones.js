function Controller() {
    function goBack() {
        $.canciones.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "canciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.winCanciones = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.purple,
        backgroundImage: "images/global/background_1-blur.jpg",
        color: "white",
        top: 0,
        height: Ti.UI.FILL,
        id: "winCanciones"
    });
    $.__views.winCanciones && $.addTopLevelView($.__views.winCanciones);
    $.__views.headerInternal = Alloy.createController("partials/headerInternal", {
        id: "headerInternal",
        __parentSymbol: $.__views.winCanciones
    });
    $.__views.headerInternal.setParent($.__views.winCanciones);
    $.__views.cancionesSoporte = Ti.UI.createScrollView({
        top: Alloy.CFG.belowHeader,
        backgroundColor: "red",
        id: "cancionesSoporte",
        layout: "vertical",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false"
    });
    $.__views.winCanciones.add($.__views.cancionesSoporte);
    $.__views.view = Ti.UI.createView({
        id: "view",
        backgroundColor: "green",
        top: "0",
        height: "2000"
    });
    $.__views.cancionesSoporte.add($.__views.view);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.headerInternal.brand.setText("Canciones");
    $.headerInternal.backToMenu.addEventListener("click", function() {
        goBack();
    });
    $.canciones.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;