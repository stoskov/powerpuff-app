var dataProvider = require("../../dataProviders/powerpuffApp"),
    TelerikBackendServices = require('../everlive/everlive.all.min');

function generateSampleQuotes() {
    return dataProvider.businessLogic.invokeCloudFunction("CreateSampleData", {
        mood: "funny"
    });
}

function getQuote(mood) {
    return provider.businessLogic.invokeCloudFunction("GetQuote", {
        mood: mood
    });
}

function getUserQoutes() {
    return provider.Users.currentUser()
        .then(function (e) {
            var filter = new TelerikBackendServices.Query();
            filter.where().eq('Owner', e.result.Id);

            var data = provider.data('UserQuotes');
            return data.get(filter);
        });
}

module.exports = {
    generateSampleQuotes: generateSampleQuotes
};