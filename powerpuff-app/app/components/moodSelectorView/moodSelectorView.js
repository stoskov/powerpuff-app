var Observable = require('data/observable').Observable,
    imagePath = '~/images/',
    moodModel = new Observable({
        moodItems: [{
            label: 'Happy',
            value: 'happy',
            img: imagePath + 'happy.png'
        }, {
            label: 'Sad',
            value: 'sad',
            img: imagePath + 'sad.png'
        }, {
            label: 'Determined',
            value: 'determined',
            img: imagePath + 'determined.png'
        }, {
            label: 'Wise',
            value: 'wise',
            img: imagePath + 'wise.png'
        }, {
            label: 'Funny',
            value: 'funny',
            img: imagePath + 'funny.png'
        }, {
            label: 'Whatever',
            value: 'whatever',
            img: imagePath + 'whatever.png'
        }]
    }),
    closeCallback;

exports.onPageLoaded = function (args) {
    var page = args.object;
    page.bindingContext = moodModel;
};

exports.onShownModally = function (args) {
    closeCallback = args.closeCallback;
};

exports.onMoodSelected = function (args) {
    var mood = moodModel.moodItems[args.index].value;

    if (closeCallback) {
        closeCallback(mood);
    }
    else {
        frame.topmost().goBack();
    }
};