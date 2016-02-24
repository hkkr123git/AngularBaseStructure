'use strict';

(function(){
    var app = angular.module('cModule',[]);
    
    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider 
        /*
         * C Home Page         
         */
        .state('root.c', {
            url: '/c',
            templateUrl: 'app/modules/C/cTemplate.html',
            controller: 'cBaseCntrlr'
        })
    }]);
})();