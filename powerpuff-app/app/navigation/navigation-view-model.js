'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "Authentication",
    "moduleName": "components/authenticationView/authenticationView",
    "icon": "\ue0e4"
}, {
    "title": "Home View",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0dd"
}, {
    "title": "Quotes List",
    "moduleName": "components/masterDetailView/masterDetailView",
    "icon": "\ue0eb"
}, {
    "title": "Sign Out",
    "moduleName": "components/authenticationView/authenticationView",
    "icon": "\ue1ff",
    "context": {
        "logout": true
    }
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;