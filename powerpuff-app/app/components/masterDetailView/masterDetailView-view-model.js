'use strict';
var ViewModel,
    calendarModule = require("nativescript-telerik-ui-pro/calendar"),
    Observable = require('data/observable').Observable;

// additional requires

ViewModel = new Observable({

    pageTitle: 'Quotes List',

    isLoading: false,
    listItems: []
    // additional properties
});

// START_CUSTOM_CODE_masterDetailView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
ViewModel.calendarEvents =  function _generateEvents() { 
    var events = [];
    for (var i = 1; i <= 14; i++) {
        var now = new Date();
        var startDate = new Date(now.getFullYear(), now.getMonth(), now.getDay(), i * 2 - 1);
        var endDate = startDate;
        var event = new calendarModule.CalendarEvent(`Event No. ${i}`, startDate, endDate, false);
        events.push(event);
    }
    return events;
}();
ViewModel.onEventSelected = function onEventSelected(data) {
    alert(JSON.stringify(data.eventData.title));
}

// END_CUSTOM_CODE_masterDetailView
module.exports = ViewModel;