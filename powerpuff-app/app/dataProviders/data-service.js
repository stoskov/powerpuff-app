var dataProvider = require("./powerpuffApp"),
    TelerikBackendServices = require('../everlive/everlive.all.min');

function generateSampleQuotes() {
    return dataProvider.businessLogic.invokeCloudFunction("CreateSampleData", {
        mood: "funny"
    });
}

function getQuote(mood) {
    return dataProvider.businessLogic.invokeCloudFunction("GetQuote", {
        mood: mood
    });
}

function getUserQuotes() {
    return dataProvider.Users.currentUser()
        .then(function (e) {
            var filter = new TelerikBackendServices.Query();
            filter.where().eq('Owner', e.result.Id);
        	filter.expand({ "Quote": { "TargetTypeName": "Quotes", "Fields": { "Text": 1, "Author": 1 } } });

            var data = dataProvider.data('UserQuotes');
            return data.get(filter);
        });
}

module.exports = {
    generateSampleQuotes: generateSampleQuotes,
    getUserQuotes: getUserQuotes,
    getQuote: getQuote,
};