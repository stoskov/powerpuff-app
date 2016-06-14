'use strict';
var ViewModel,
    calendarModule = require("nativescript-telerik-ui-pro/calendar"),
    dataService = require('../../dataProviders/data-service'),
    Observable = require('data/observable').Observable,
    ObservableArray = require("data/observable-array").ObservableArray,
    socialShare = require("nativescript-social-share");

ViewModel = new Observable({

    pageTitle: 'Quotes List',
	calendarEvents: [],
    isLoading: false,
    listItems: []
});

// START_CUSTOM_CODE_masterDetailView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function _generateEvents() {
    return dataService.getUserQuotes().then(function (quotes) {
	    var calendarEvents = [];
        for (var i = 0; i < quotes.result.length; i++) {
            var startDate = new Date(quotes.result[i].Day);
            var endDate = startDate;
            var quote = quotes.result[i].Quote;
            var event = new calendarModule.CalendarEvent(`"${quote.Text}"\n\n${quote.Author}`, startDate, endDate, true);
            event.raw = quotes.result[i];
            calendarEvents.push(event);
        }
//        alert(calendarEvents.length + '\n' + JSON.stringify(calendarEvents));
        ViewModel.set('calendarEvents', calendarEvents);
    })
	.catch(function(err) {
		alert("Something wrong happened: " + err);
 	});
})();

ViewModel.onEventSelected = function onEventSelected(data) {
    socialShare.shareText(data.eventData.title, "How would you like to share this quote?");
}

// END_CUSTOM_CODE_masterDetailView
module.exports = ViewModel;