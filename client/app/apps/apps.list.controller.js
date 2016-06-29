'use strict';

angular.module('skynetApp')
    .controller('AppsListCtrl', function ($http) {
        var self = this;

        self.delete = function (app) {
            $http.delete("/api/v1/apps/" + app._id)
                .success(function (app) {
                    removeApp(app)
                });
        };

        var removeApp = function (app) {
            var indexToRemove = _.findIndex(self.apps, function (a) {
                return app._id == a._id;
            });

            self.apps.splice(indexToRemove,1);
        };

        $http.get("/api/v1/apps")
            .success(function (app) {
                self.apps = app;
            })

    });
