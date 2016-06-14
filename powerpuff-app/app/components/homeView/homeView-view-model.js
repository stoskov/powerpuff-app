'use strict';
var ViewModel,
    application = require('application'),
    Observable = require('data/observable').Observable,
    //vibrator = require('nativescript-vibrate'),
    dialog = require('nativescript-dialog'),
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
    shareVisibility: 'collapsed',

    onSelectMood: function (params) {
        var that = this,
            page = params.object.page,
            options = {
                title: "Choose Your Mood",
                message: "Choose your mood",
                cancelButtonText: "Cancel"
            };

        page.showModal('./components/moodSelectorView/moodSelectorView', 'Select your mood', function (result) {
            if (!result) {
                return;
            }

            that.mood = result;

            that.set('shareVisibility', 'collapsed');

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
                that.quote = "\"" + res.Result.Quote.Text + "\"" + "\n\n" + res.Result.Quote.Author;
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