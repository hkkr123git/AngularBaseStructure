'use strict';

(function(){
    var app = angular.module('bModule',[]);
    
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider 
        /*
         * B Home Page         
         */
        .state('root.b', {
            url: '/b',
            templateUrl: 'app/modules/B/bTemplate.html',
            controller: 'bBaseCntrlr'
        })
    }]);
})();