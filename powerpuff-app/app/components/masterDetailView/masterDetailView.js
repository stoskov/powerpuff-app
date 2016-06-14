'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),
    service = require('./masterDetailView-service'),
    viewModel = require('./masterDetailView-view-model'),
    Observable = require("data/observable").Observable;
function onListViewItemTap(args) {
    var itemData = viewModel.get('listItems')[args.index];

    helpers.navigate({
        moduleName: 'components/masterDetailView/itemDetails/itemDetails',
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

function flattenLocationProperties(dataItem) {
    var propName, propValue,
        isLocation = function(value) {
            return propValue && typeof propValue === 'object' &&
                propValue.longitude && propValue.latitude;
        };

    for (propName in dataItem) {
        if (dataItem.hasOwnProperty(propName)) {
            propValue = dataItem[propName];
            if (isLocation(propValue)) {
                dataItem[propName] =
                    'Latitude: ' + propValue.latitude +
                    'Longitude: ' + propValue.longitude;
            }
        }
    }
}
// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;
	
    viewModel.generateEvents();
    viewModel.set('isLoading', true);
    viewModel.set('listItems', []);

    function _fetchData() {
        var context = page.navigationContext;

        if (context && context.filter) {
            return service.getAllRecords(context.filter);
        }

        return service.getAllRecords();
    };

    _fetchData()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {
                flattenLocationProperties(item);
                itemsList.push({
                    header: item.DisplayName,
                    // singleItem properties
                    details: item
                });
            });

            viewModel.set('listItems', itemsList);
            viewModel.set('isLoading', false);
        })
        .catch(function onCatch() {
            viewModel.set('isLoading', false);
        });

    if (isInit) {
        isInit = false;
    }
}

exports.pageLoaded = pageLoaded;