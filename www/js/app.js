// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // https://github.com/driftyco/ionic/issues/2749
    $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
    $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
    })

    // Each tab has its own nav history stack:


    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'templates/tab-dash.html',
                controller: 'DashCtrl'
            }
        }
    })

    .state('tab.items', {
        url: '/items',
        views: {
            'tab-items': {
                templateUrl: 'templates/tab-items.html',
                controller: 'ItemsCtrl'
            }
        }
    })



    .state('tab.order', {
        url: '/order',
        views: {
            'tab-order': {
                templateUrl: 'templates/tab-order.html',
                controller: 'OrderCtrl'
            }
        }
    })

    .state('tab.order-detail', {
        url: '/order/:orderId',
        views: {
            'tab-order': {
                templateUrl: 'templates/order-detail.html',
                controller: 'OrderDetailCtrl'
            }
        }
    })

    .state('tab.groups', {
        url: '/groups',
        views: {
            'tab-groups': {
                templateUrl: 'templates/tab-groups.html',
                controller: 'GroupsCtrl'
            }
        }
    })

    .state('tab.group-detail', {
        url: '/group/:groupId',
        views: {
            'tab-groups': {
                templateUrl: 'templates/group-detail.html',
                controller: 'GroupsDetailCtrl'
            }
        }
    })

    .state('tab.item-detail', {
        url: '/items/:itemId',
        views: {
            'tab-groups': {
                templateUrl: 'templates/item-detail.html',
                controller: 'ItemDetailCtrl'
            }
        }
    })





    .state('tab.cart', {
        url: '/cart',
        views: {
            'tab-cart': {
                templateUrl: 'templates/tab-cart.html',
                controller: 'CartCtrl'
            }
        }
    })

    .state('tab.other', {
        url: '/other',
        views: {
            'tab-other': {
                templateUrl: 'templates/tab-other.html',
                controller: 'OtherCtrl'
            }
        }
    })


    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
