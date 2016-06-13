'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model'),
    dialogs = require("ui/dialogs"),
    accelerometer = require("nativescript-accelerometer");

// additional functions
function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        // additional pageInit
    }
    
    var i = 0;
    
    dialogs.alert("aloha!");
    accelerometer.startAccelerometerUpdates(function(data) {
        dialogs.alert("x: " + data.x + "y: " + data.y + "z: " + data.z);
    i++;
    if(i>5) {
        accelerometer.stopAccelerometerUpdates();
    }});
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;