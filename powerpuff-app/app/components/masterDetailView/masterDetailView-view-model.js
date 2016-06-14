'use strict';
var ViewModel,
    calendarModule = require("nativescript-telerik-ui-pro/calendar"),
    dataService = require('../../dataProviders/data-service'),
    Observable = require('data/observable').Observable,
    ObservableArray = require("data/observable-array").ObservableArray;

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
            var now = new Date(quotes.result[i].Day);
            var startDate = new Date(now.getFullYear(), now.getMonth(), now.getDay());
            var endDate = startDate;
            var event = new calendarModule.CalendarEvent(quotes.result[i].Quote.Text, startDate, endDate, true);
            calendarEvents.push(event);
        }
        
        ViewModel.set('calendarEvents', calendarEvents);
    })
	.catch(function(err) {
		alert("Something wrong happened: " + err + error.stack);
 	});/***/
})();

ViewModel.onEventSelected = function onEventSelected(data) {
    alert(JSON.stringify(data.eventData._title));
    alert(data.eventData.title + data.eventData.startTime + data.eventData.endTime + data.eventData.isAllDay);
    alert(data.eventData.title + data.eventData._startTime + data.eventData._endTime + data.eventData.isAllDay);
}

// END_CUSTOM_CODE_masterDetailView
module.exports = ViewModel;