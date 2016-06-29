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
                controller: function () {

                }
            })
            .state('apps.add', {
                url: '/add',
                templateUrl: "app/apps/form.html",
                controller: function () {

                }
            })
            .state('apps.edit', {
                url: '/edit/:id',
                templateUrl: "app/apps/form.html",
                controller: function () {

                }
            })
            .state('apps.connected', {
                url: '/connected',
                templateUrl: "app/apps/connected-apps.html",
                controller: function () {

                }
            })
        ;
    });