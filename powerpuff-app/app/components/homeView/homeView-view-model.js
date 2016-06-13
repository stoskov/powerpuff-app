'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
    //accelerometer = require("nativescript-accelerometer"),
    //dialogs = require("ui/dialogs");
// additional requires

ViewModel = new Observable({

    pageTitle: 'Home View',
    // additional properties
    
    //init: function() {
    //    var that = this;
    //    accelerometer.startAccelerometerUpdates(function(data) {
    //    dialogs.alert("x: " + data.x + "y: " + data.y + "z: " + data.z);});
    //},
    
    //_accelerometerUpdates: function(data) {
    //    var that = this;        
    //    
    //    dialogs.alert("Shaken x:" + data.x + " y:" + data.y + " z:" + data.z);
    //    if (data.x + data.y + data.z > 10) {
    //        dialogs.alert("Shaken not stirred!");
    //    }
    //}
});

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
module.exports = ViewModel;