'use strict';
var ViewModel,
    Observable = require('data/observable').Observable,
    //vibrator = require('nativescript-vibrate'),
    dialogs = require('ui/dialogs'),
    dataService = require("../../dataProviders/data-service"),
    accelerometer = require('nativescript-accelerometer');
// additional requires

ViewModel = new Observable({
    isLoading: true,
    pageTitle: 'Home View',
    shaken: false,
    callback: true,
    quote: "",
    mood: "",
    onSelectMood: function (params) {
        var that = this,
            options = {
                title: "Race Selection",
                message: "Choose your race",
                cancelButtonText: "Cancel",
                actions: ['happy', 'sad', 'determined', 'wise', 'funny', 'whatever']
            };
            
        dialogs.action(options)
            .then((result) => {
                that.mood = result;
            });
    },
    getQuote: function (params) {
        var that = this;

        that.isLoading = true;
        dataService.getQuote()
            .then(function (res) {
                that.quote = res.Result.Quote.Text;
                that.isLoading = false;
            })
            .catch(function (params) {
                that.quote = "error";
                that.isLoading = false;
            })

    }
});

module.exports = ViewModel;