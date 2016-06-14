'use strict';
var _,
    // additional requires
    accelerometer = require("nativescript-accelerometer"),
    vibrator = require("nativescript-vibrate"),
    app = require("application"),
    consts,
    dialogs = require("ui/dialogs");

function HomeViewService() {}

HomeViewService.prototype = {
    vibrator_service: null,
    
    attachToAccelerometer: function (callback) {
        var that = this;
        var oldData = null;
        accelerometer.startAccelerometerUpdates(function (data) {
            console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);
            
            if (oldData) {
                //dialogs.alert("old data x: " + oldData.x + " new data x:" + data.x + " old data y: " + oldData.y + " new data y:" + data.y  + "old data z: " + oldData.z + " new data z:" + data.z);
                if(Math.abs(oldData.x - data.x) > 0.05 || Math.abs(oldData.y - data.y) > 0.05 || Math.abs(oldData.z - data.z) > 0.05) {
                    //dialogs.alert("stopAccelerometerUpdates");
                    accelerometer.stopAccelerometerUpdates();
                    
                   // dialogs.alert("vibrate now");
                    vibrator.vibration(500);
                    callback();
                	//that.detachFromAccelerometer();
                }
            }
            
            oldData = data;});
    },
    
	detachFromAccelerometer: function() {
        accelerometer.stopAccelerometerUpdates();
    },
    
	_vibration: function(milliseconds) {
        var that = this;
		if(!that.vibrator_service){
			that.vibrator_service = app.android.context.getSystemService(android.content.Context.VIBRATOR_SERVICE);
		}
		if(that.vibrator_service.hasVibrator()){
			milliseconds = typeof milliseconds !== 'undefined' ? milliseconds : 500;
			that.vibrator_service.vibrate(milliseconds);
            that.vibrator_service.cancel();
		}
	}
}

//function Service() {};

// additional properties

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
module.exports = new HomeViewService();