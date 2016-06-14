'use strict';
var ViewModel,
    calendarModule = require("nativescript-telerik-ui-pro/calendar"),
    dataService = require('../../dataProviders/powerpuffApp'),
    Observable = require('data/observable').Observable;

ViewModel = new Observable({

    pageTitle: 'Quotes List',

    isLoading: false,
    listItems: []
});

// START_CUSTOM_CODE_masterDetailView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
ViewModel.calendarEvents =  function _generateEvents() { 
    dataService.getUserQuotes().then(function (quotes) {
        alert(JSON.stringify(quotes));
    });
	.catch(function(err) {
		alert("Something wrong happened: " + err);
 	});
   
    var events = [];
    for (var i = 1; i <= 14; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), now.getDay(), i * 2 - 1);
        var endDate = startDate;
        var event = new calendarModule.CalendarEvent(`Event No. ${i}`, startDate, endDate, true);
        events.push(event);
    }
    return events;
}();
ViewModel.onEventSelected = function onEventSelected(data) {
    alert(JSON.stringify(data.eventData._title));
    alert(data.eventData.title + data.eventData.startTime + data.eventData.endTime + data.eventData.isAllDay);
    alert(data.eventData.title + data.eventData._startTime + data.eventData._endTime + data.eventData.isAllDay);
}

// END_CUSTOM_CODE_masterDetailView
module.exports = ViewModel;