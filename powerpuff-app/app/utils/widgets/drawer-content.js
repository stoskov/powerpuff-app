'use strict';
var menuItems,
    observable = require('data/observable'),
    drawerContentViewModel = new observable.Observable(),
    helpers = require('./helper');

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

drawerContentViewModel.set('menuItems', menuItems);
drawerContentViewModel.set('backButtonHidden', true);

function loaded(args) {
    var page = args.object;
	console.log("test")
    helpers.platformInit(page);
    page.bindingContext = drawerContentViewModel;
    drawerContentViewModel.set('pageTitle', 'nativeScriptApp');
}

function menuItemTap(args) {
    helpers.navigate(drawerContentViewModel.menuItems[args.index]);
}

exports.loaded = loaded;
exports.menuItemTap = menuItemTap;