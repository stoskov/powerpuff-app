var application = require('application'),
    appSettings = require('./settings.json');

application.start({
    moduleName: appSettings.mainModule
});