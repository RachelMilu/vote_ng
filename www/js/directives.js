angular.module('starter.directives', [])

.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        //transclude : true,
/*
        template : '<div>'
                 + '<div class="title" ng-click="toggle()">{{title}}</div>'
                 + '<div class="body" ng-show="showMe" ng-transclude></div>'
                 + '</div>',
*/
        link : function(scope, element, attrs) {
            scope.showMe = false;
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
            }
        }
    }
});