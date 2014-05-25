function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "partials/header";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.header = Ti.UI.createView({
        backgroundColor: "#1b1464",
        height: Alloy.CFG.headerHeight,
        top: 0,
        zIndex: 5,
        id: "header"
    });
    $.__views.header && $.addTopLevelView($.__views.header);
    $.__views.brand = Ti.UI.createLabel({
        color: "#FFF",
        text: "Novenapp",
        id: "brand"
    });
    $.__views.header.add($.__views.brand);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;