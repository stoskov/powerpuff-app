'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    // additional requires
    viewModel = require('./homeView-view-model'),
    homeViewService = require('./homeView-service'),
    dialogs = require("ui/dialogs"),
    socialShare = require("nativescript-social-share");

function pageLoaded(args) {
    var page = args.object;
        //service = new viewService();

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    if (isInit) {
        isInit = false;

        // additional pageInit
    }

    helpers.checkAuthentication()
        .then(function () {
        	setTimeout(function(){
            viewModel.set("isLoading", false);    
            }, 2000);
        	
            homeViewService.attachToAccelerometer(function() {
                dialogs.alert("vibrated!");
                socialShare.shareText("I love to vibrate", "How would you like to share your PowerPuff quote?");
            });
        });
}

// START_CUSTOM_CODE_homeView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_homeView
exports.pageLoaded = pageLoaded;