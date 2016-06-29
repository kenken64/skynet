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
                controller: "AppsListCtrl as ctrl"
            })
            .state('apps.add', {
                url: '/add',
                templateUrl: "app/apps/form.html",
                controller: "AppsFormCtrl as ctrl"
            })
            .state('apps.edit', {
                url: '/edit/:_id',
                templateUrl: "app/apps/form.html",
                controller: "AppsFormCtrl as ctrl"
            })
            .state('apps.connected', {
                url: '/connected',
                templateUrl: "app/apps/connected-apps.html",
                controller: function () {

                }
            })
        ;
    });