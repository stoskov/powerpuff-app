'use strict';
var LoginViewModel,
	FacebookLoginHandler = require("nativescript-facebook-login"),
    frameModule = require("ui/frame"),
    topmost = frameModule.topmost,
    Observable = require('data/observable').Observable,
    el = require('');

LoginViewModel = new Observable({

    pageTitle: 'Log in',

    onFbLogin: function() {
        // confirm(require("application").android.foregroundActivity);
        
        // confirm("OK?");
        
        var successCallback = function(result) {
            confirm("success callback?");
            var token;
            
            if (topmost().android){
              token = result.getAccessToken().getToken();
            }
            else if (topmost().ios){
              token = result.token.tokenString
            }
            alert(token);
        }

        var cancelCallback = function() {
            alert("Login was cancelled");
        }

        var failCallback = function(error) {
            var errorMessage = "Error with Facebook";
    
           if (error) {
                if (topmost().ios) {
                    if (error.localizedDescription) {
                        errorMessage += ": " + error.localizedDescription;
                    }
                    else if (error.code) {
                        errorMessage += ": Code " + error.code;
                    }
                    else {
                        errorMessage += ": " + error;   
                    }
                }
                else if (topmost().android) {
                    if (error.getErrorMessage) {
                        errorMessage += ": " + error.getErrorMessage();
                    }
                    else if (error.getErrorCode) {
                        errorMessage += ": Code " + error.getErrorCode();
                    }
                    else {
                        errorMessage += ": " + error;   
                    }
                }
            }
            
            alert(errorMessage);
        }  
       
    
        if (topmost().ios) {
            confirm("iOS?");
            FacebookLoginHandler.init(2);
        }

        else if (topmost().android) {
            //confirm("Android?");
            FacebookLoginHandler.init();
        }
        FacebookLoginHandler.registerCallback(successCallback, cancelCallback, failCallback); 
        FacebookLoginHandler.logInWithPublishPermissions(["publish_actions"]);     
    }
});

module.exports = LoginViewModel;