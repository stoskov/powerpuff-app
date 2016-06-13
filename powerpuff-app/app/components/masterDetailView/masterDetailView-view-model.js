'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;

ViewModel = new Observable({
    pageTitle: 'Quotes List',
    isLoading: false,
    listItems: []
});

module.exports = ViewModel;