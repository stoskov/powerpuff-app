'use strict';

var frameModule = require('ui/frame');

function onBack() {
    // Android only
    var topmost = frameModule.topmost();

    topmost.goBack();
}

function onIndex() {
    var topmost = frameModule.topmost();

    topmost.navigate('components/homeView/homeView');
}

exports.onBack = onBack;
exports.onIndex = onIndex;
