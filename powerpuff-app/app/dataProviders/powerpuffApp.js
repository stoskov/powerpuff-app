var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    appId: '0qdbypuvcveib8fj',
    scheme: 'https'
});

// START_CUSTOM_CODE_powerpuffApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_powerpuffApp
module.exports = provider;