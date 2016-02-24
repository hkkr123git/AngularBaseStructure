'use strict';

(function(){
    var app = angular.module('testApp',[
        'ui.router',         
        'aModule',
        'bModule',
        'cModule'
    ]);
    
     app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {    
        //Landing Page - currently set to Training Management Page
        $urlRouterProvider.otherwise('/login');

        $stateProvider

        //Login Page     
        .state('login', {
            url: '/login',
            templateUrl: 'app/modules/layout/login/loginTemplate.html',
            controller: 'loginCntrlr'
        })

        //App base layout
        .state('root', {
            abstract: true,
            views: {
                '': {
                    templateUrl: 'app/modules/layout/contentArea/contentAreaTemplate.html'
                },
                'headerSidebar@root': {
                    templateUrl: 'app/modules/layout/headerSidebar/headerSideBarTemplate.html',
                    controller: 'headerSidebarCntrlr'
                },
                'footerHolder@root': {
                    /*
                    templateUrl: '',
                    controller: ''
                    */
                }
            }
        });
    }]);
})();