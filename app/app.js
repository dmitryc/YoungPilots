'use strict';

// Declare app level module which depends on views, and components
angular.module('youngPilots', [
    'ngRoute', 'main.controllers', 'main.services', 'main.directives', 'underscore', 'ui.bootstrap'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/main-page/main-page.html',
            controller: 'MainCtrl',
            resolve: {
                broadcastDate: function (Broadcast) {
                    return Broadcast.get().$promise;
                },
                activeContacts: function(ContentFactory) {
                    return ContentFactory.query({folder: "contacts", filename: "active-contacts.json"}).$promise
                },
                usefulThings: function(ContentFactory) {
                    return ContentFactory.query({folder: "useful-things", filename: "useful-things.json"}).$promise
                },
                conferences: function(ContentFactory) {
                    return ContentFactory.query({folder: "conferences", filename: "conferences.json"}).$promise
                },
                quotes: function(ContentFactory) {
                    return ContentFactory.query({folder: "quotes", filename: "quotes.json"}).$promise
                }
            }
        })
    }]);
