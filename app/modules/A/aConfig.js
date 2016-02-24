'use strict';

(function(){
    var app = angular.module('aModule',[]);
    
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider 
        /*
         * A Home Page         
         */
        .state('root.a', {
            url: '/a',
            templateUrl: 'app/modules/A/aTemplate.html',
            controller: 'aBaseCntrlr'
        })
    }]);
})();