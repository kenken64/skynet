'use strict';

angular.module('skynetApp')
    .controller('AppsFormCtrl', function ($http, $state, $stateParams) {
        var self = this;

        if ($stateParams._id) {
            $http.get("/api/v1/apps/" + $stateParams._id)
                .success(function (data) {
                    self.app = data;
                });
        } else {
            self.app = {};
        }

        self.save = function () {
            $http.post("/api/v1/apps", self.app)
                .success(function (data) {
                    $state.go("apps.edit", data);
                })
        };



    });