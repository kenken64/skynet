'use strict';

angular.module('skynetApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('apps', {
                url: '/apps',
                template: "<div ui-view></div>",
                absolute: true,
                authenticate: true
            })
            .state('apps.my', {
                url: '/my',
                templateUrl: "app/apps/my-apps.html",
                controller: "AppsListCtrl as ctrl",
                authenticate: true

            })
            .state('apps.add', {
                url: '/add',
                templateUrl: "app/apps/form.html",
                controller: "AppsFormCtrl as ctrl",
                authenticate: true

            })
            .state('apps.edit', {
                url: '/edit/:_id',
                templateUrl: "app/apps/form.html",
                controller: "AppsFormCtrl as ctrl",
                authenticate: true

            })
            .state('apps.connected', {
                url: '/connected',
                templateUrl: "app/apps/connected-apps.html",
                authenticate: true,
                controller: function () {

                }
            })
        ;
    });