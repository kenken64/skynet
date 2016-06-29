'use strict';

angular.module('skynetApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('apps', {
                url: '/apps',
                absolute: true,
                authenticate: true
            })
            .state('apps.my', {
                url: '/my',
                templateUrl: "app/apps/my-apps.html",
                controller: function () {

                }
            })
            .state('apps.connected', {
                url: '/connected',
                templateUrl: "app/apps/my-apps.html",
                controller: function () {

                }
            })
        ;
    });