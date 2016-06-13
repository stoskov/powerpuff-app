'use strict';
var ViewModel,
    Observable = require('data/observable').Observable,
    accelerometer = require("nativescript-accelerometer"),
    vibrator = require("nativescript-vibrate"),
    dialogs = require("ui/dialogs");
// additional requires

ViewModel = new Observable({

    pageTitle: 'Home View',
    shaken: false,
    callback: true,
    // additional properties
    
    startListeningForShake: function() {
        var that = this;

        dialogs.alert("startListeningForShake");
        accelerometer.startAccelerometerUpdates(function(data) { that._accelerometerCallback(data); });
	},
    
    stopListeningForShake: function() {
        var that = this;
        dialogs.alert("stopListeningForShake");
        accelerometer.stopAccelerometerUpdates();
    },
    
    _accelerometerCallback: function(data) {
        var that = this;
        
        if(that.callback) {
            dialogs.alert("_accelerometerCallback: data=" + data);
            callback = false;
        }
            
        if (data.x > 0.60 || data.y > 60) {
            
            that.stopListeningForShake();
            vibrator.vibration("1000");
            that.shaken = true;
        }
    }
    
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
module.exports = ViewModel;