'use strict';
var ViewModel,
    Observable = require('data/observable').Observable,
    //vibrator = require('nativescript-vibrate'),
    dialogs = require('ui/dialogs'),
    dataService = require("../../dataProviders/data-service"),
    accelerometer = require('nativescript-accelerometer'),
    homeViewService = require('./homeView-service'),
    socialShare = require("nativescript-social-share");
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
                title: "Mood Selection",
                message: "Choose your mood",
                cancelButtonText: "Cancel",
                actions: ['happy', 'sad', 'determined', 'wise', 'funny', 'whatever']
            };

        dialogs.action(options)
            .then((result) => {
                that.mood = result;

                homeViewService.attachToAccelerometer(function () {
                    var quote = that.getQuote(that.mood);

                    that.set('shareVisibility', 'visible');

                });
            });
    },

    share: function (params) {
        socialShare.shareText(this.quote, "How would you like to share your PowerPuff quote?");
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
            });
        return that.quote;
    }
});

module.exports = ViewModel;