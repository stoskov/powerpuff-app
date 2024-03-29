'use strict';
var _,

    dataService = require('../../dataProviders/powerpuffApp'),
    localSettings = require('application-settings'),
    // additional requires

    consts;

function Service() { }

consts = {
    accessTokenKey: 'accessToken',
    accessTokenTypeKey: 'accessTokenType',
    accessTokenPrincipalIdKey: 'accessTokenPrincipalId'
};

function validateArgs(args) {
    if (!args.email) {
        throw new Error('Service: login - missing email');
    }

    if (!args.password) {
        throw new Error('Service: login - missing password');
    }
}

Service.prototype.signin = function (args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.login(args.email, args.password)
        .then(function (e) {
            localSettings.setString(consts.accessTokenKey,
                e.result.access_token);
            localSettings.setString(consts.accessTokenTypeKey,
                e.result.token_type);
            localSettings.setString(consts.accessTokenPrincipalIdKey,
                e.result.principal_id);

            successCallback();
        }, errorCallback);
};

Service.prototype.signout = function (successCallback, errorCallback) {
    if (!errorCallback) {
        errorCallback = function () { };
    }
    return this.getCurrentUser().then(function _logoutUser() {
        return dataService.Users.logout()
            .then(function (e) {
                localSettings.remove(consts.accessTokenKey);
                localSettings.remove(consts.accessTokenTypeKey);
                localSettings.remove(consts.accessTokenPrincipalIdKey);

                successCallback();
            }, errorCallback);
    }, errorCallback);
};

Service.prototype.register = function (args, successCallback, errorCallback) {
    validateArgs(args);

    return dataService.Users.register(args.email, args.password, {
        Email: args.email,
        DisplayName: args.displayName
    })
        .then(successCallback, errorCallback);
};

Service.prototype.getCurrentUser = function () {
    return dataService.Users.currentUser();
};

Service.prototype.isAuthenticated = function () {
    return localSettings.getString(consts.accessTokenKey) &&
        localSettings.getString(consts.accessTokenTypeKey) &&
        localSettings.getString(consts.accessTokenPrincipalIdKey);
};

Service.prototype.setAuthorization = function () {
    dataService.Users.setAuthorization(
        localSettings.getString(consts.accessTokenKey),
        localSettings.getString(consts.accessTokenTypeKey),
        localSettings.getString(consts.accessTokenPrincipalIdKey));
};
// additional properties

// START_CUSTOM_CODE_authenticationView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_authenticationView
module.exports = new Service();