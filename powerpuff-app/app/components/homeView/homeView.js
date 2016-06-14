'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model'),
    dialogs = require("ui/dialogs"),
    accelerometer = require("nativescript-accelerometer"),
    vibrator = require("nativescript-vibrate");

function attachToAccelerometer() {
    //vibrator.vibration("1000");
    var amount = 0;
    accelerometer.startAccelerometerUpdates(function (data) {
        console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);

        if (data.x + data.y > 1) {
            amount++;
            if (amount > 10) {
//                vibrator.vibration(500);
                amount = 0;
            }
        }
    });
}

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    if (isInit) {
        isInit = false;

        // additional pageInit
    }

    helpers.checkAuthentication()
        .then(function () {
        	setTimeout(function(){
            viewModel.set("isLoading", false);    
            }, 2000);
        	
            attachToAccelerometer();
        });
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;