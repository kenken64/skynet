'use strict';

var _ = require('lodash');
var App = require('./app.model');

// Get list of apps
exports.index = function (req, res) {
    App.find({
        createdBy: req.user._id
    }, function (err, apps) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(200).json(apps);
    });
};

// Get a single app
exports.show = function (req, res) {
    App.findOne({
        _id: req.params.id,
        createdBy: req.user._id
    }, function (err, app) {
        if (err) {
            return handleError(res, err);
        }
        if (!app) {
            return res.status(404).send('Not Found');
        }
        return res.json(app);
    });
};

// Creates a new app in the DB.
exports.create = function (req, res) {
    req.body.createdBy = req.user._id;
    App.create(req.body, function (err, app) {
        if (err) {
            return handleError(res, err);
        }
        return res.status(201).json(app);
    });
};

// Updates an existing app in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    if (req.body.createdBy) {
        delete req.body.createdBy;
    }
    App.findOne({
        _id: req.params.id,
        createdBy: req.user._id
    }, function (err, app) {
        if (err) {
            return handleError(res, err);
        }
        if (!app) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(app, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(app);
        });
    });
};

// Deletes a app from the DB.
exports.destroy = function (req, res) {
    App.findOne({
        _id: req.params.id,
        createdBy: req.user._id
    }, function (err, app) {
        if (err) {
            return handleError(res, err);
        }
        if (!app) {
            return res.status(404).send('Not Found');
        }
        app.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(204).send('No Content');
        });
    });
};

function handleError(res, err) {
    return res.status(500).send(err);
}