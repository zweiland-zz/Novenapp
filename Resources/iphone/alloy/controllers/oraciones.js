function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "oraciones";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.oraciones = Ti.UI.createWindow({
        backgroundColor: Alloy.CFG.purple,
        top: 0,
        height: Ti.UI.FILL,
        backgroundImage: "images/global/background_2-blur.jpg",
        color: "white",
        id: "oraciones"
    });
    $.__views.oraciones && $.addTopLevelView($.__views.oraciones);
    $.__views.headerInternal = Alloy.createController("partials/headerInternal", {
        id: "headerInternal",
        __parentSymbol: $.__views.oraciones
    });
    $.__views.headerInternal.setParent($.__views.oraciones);
    $.__views.__alloyId4 = Ti.UI.createView({
        id: "__alloyId4"
    });
    $.__views.oraciones.add($.__views.__alloyId4);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        color: "white",
        text: "Oraciones",
        id: "__alloyId5"
    });
    $.__views.__alloyId4.add($.__views.__alloyId5);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.headerInternal.brand.setText("Oraciones");
    $.headerInternal.backToMenu.addEventListener("click", function() {
        Alloy.createController("index").getView().open();
    });
    $.oraciones.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;