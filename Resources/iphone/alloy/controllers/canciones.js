function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "canciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.canciones = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.purple,
        top: 0,
        height: Ti.UI.FILL,
        backgroundImage: "images/global/background_1-blur.jpg",
        color: "white",
        id: "canciones"
    });
    $.__views.canciones && $.addTopLevelView($.__views.canciones);
    $.__views.headerInternal = Alloy.createController("partials/headerInternal", {
        id: "headerInternal",
        __parentSymbol: $.__views.canciones
    });
    $.__views.headerInternal.setParent($.__views.canciones);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.canciones.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Canciones",
        id: "__alloyId1"
    });
    $.__views.__alloyId0.add($.__views.__alloyId1);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.headerInternal.brand.setText("Canciones");
    $.headerInternal.backToMenu.addEventListener("click", function() {
        Alloy.createController("index").getView().open();
    });
    $.canciones.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;