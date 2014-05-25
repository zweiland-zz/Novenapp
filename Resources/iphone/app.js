function isiOS7Plus() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.CFG.headerHeight = 44.5;

Alloy.CFG.iosTop = isiOS7Plus() ? 20 : 0;

Alloy.createController("index");