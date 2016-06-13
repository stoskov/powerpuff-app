var application = require('application'),
    settings = require("./appSettings");

application.start({
    moduleName: settings.mainModule
});