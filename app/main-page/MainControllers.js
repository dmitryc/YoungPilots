/**
 * Created by artemvlasov on 19/04/15.
 */
var app = angular.module('main.controllers', ['ngCookies']);

app.controller('MainCtrl', ['activeContacts', 'usefulThings', 'conferences', 'quotes', '$scope',
    function(activeContacts, usefulThings, conferences, quotes, $scope) {
        $scope.usefulThings = usefulThings;
        $scope.activeContacts = activeContacts;
        $scope.conferences = conferences;
        $scope.quotes = quotes;
        $scope.socialIcons = {
            "github": "style/image/socials/github.png",
            "twitter": "style/image/socials/twitter.png",
            "linkedin": "style/image/socials/linkedin.png"
        };
        $scope.filterTag = '';
        $scope.changeFilter = function(tag) {
            $scope.filterTag = tag;
        };
        $scope.checkTagLimit = function(tags) {
            if(tags.length < 5) {
                return 5;
            } else {
                var tagsLength = 0;
                var lastTagLength = 0;
                _.each(tags, function(tag, index) {
                    if(_.isEqual(index, tags.length - 1)) {
                        lastTagLength = tag.length;
                    }
                    tagsLength += tag.length;
                });
                if(tagsLength >= 25) {
                    return 4;
                } else {
                    return 5;
                }
            }
        }
    }
]);
