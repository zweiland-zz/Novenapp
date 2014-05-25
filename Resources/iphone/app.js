function isiOS7Plus() {
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0], 10);
    if (major >= 7) return true;
    return false;
}

var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.CFG.purple = "#1b1464";

Alloy.CFG.yellow = "#ffd122";

Alloy.CFG.maroon = "#6d0c10";

Alloy.CFG.headerHeight = 44.5;

Alloy.CFG.currentTime = new Date();

Alloy.CFG.currentHours = Alloy.CFG.currentTime.getHours();

Alloy.CFG.currentMinutes = Alloy.CFG.currentTime.getMinutes();

Alloy.CFG.currentMonth = Alloy.CFG.currentTime.getMonth() + 1;

Alloy.CFG.currentDay = Alloy.CFG.currentTime.getDate();

Alloy.CFG.currenMonth = Alloy.CFG.currentTime.getMonth();

Alloy.CFG.currentYear = Alloy.CFG.currentTime.getFullYear();

Alloy.CFG.iosTop = isiOS7Plus() ? 20 : 0;

Alloy.createController("index");