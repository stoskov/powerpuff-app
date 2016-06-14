'use strict';
var ViewModel,
    Observable = require('data/observable').Observable,
    //vibrator = require('nativescript-vibrate'),
    dialogs = require('ui/dialogs'),
    accelerometer = require('nativescript-accelerometer');
    // additional requires

    ViewModel = new Observable({
        isLoading: true,
        pageTitle: 'Home View',
        shaken: false,
        callback: true,
        // shakeEvent: new shake({
        //     threshold: 15, // optional shake strength threshold
        // 	timeout: 1000 // optional, determines the frequency of event generation
        // }),
        // additional properties

        // startListeningForShake: function() {
        //     var that = this;

        //     dialogs.alert("startListeningForShake");
        //     // myShakeEvent.start();

        //     // //Register a shake event listener on window with your callback:
        //     // window.addEventListener('shake', that._shakeEventDidOccur, false);
        //     var amount = 0;
        //     accelerometer.startAccelerometerUpdates(function(data) {
        //         console.log("x: " + data.x + "y: " + data.y + "z: " + data.z);

        //         amount++;
        //         if(amount > 10) {
        //             that._shakeEventDidOccur();
        //         }
        //     });
        // },

        // stopListeningForShake: function() {
        //     var that = this;
        //     dialogs.alert("stopListeningForShake");

        // 	// window.removeEventListener('shake', that._shakeEventDidOccur, false);
        // 	// that.shake.stop();
        // },

        // _shakeEventDidOccur: function() {
        //     var that = this;
        //     //put your own code here etc.
        //     dialogs.alert('shake!');
        //     that.shaken = true;

        //     that.stopListeningForShake();
        //     vibrator.vibration('200');
        // }    
    });

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
module.exports = ViewModel;