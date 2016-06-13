'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    service = require('./authenticationView-service'),
    localSettings = require('application-settings'),
    LoginViewModel = require('./authenticationView-view-model');

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = LoginViewModel;

    // if (page.navigationContext && page.navigationContext.logout) {
    //     service.signout(onShowSignin, onShowSignin);
    // } else {
    //     if (service.isAuthenticated()) {
    //         service.setAuthorization();
    //         signinSuccess();
    //     }
    // }
    
    // additional pageLoaded
    // if (isInit) {
    //     isInit = false;

    //     viewModel.on(viewModel.events.signin, onSignin);

    //     viewModel.on(viewModel.events.register, onRegister);
    //     viewModel.on(viewModel.events.showRegister, onShowRegister);
    //     viewModel.on(viewModel.events.showSignin, onShowSignin);

    // }
}

exports.pageLoaded = pageLoaded;
