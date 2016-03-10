'use strict';

(function(){
    var app = angular.module('testApp');
    
    app.controller('headerSidebarCntrlr', ['$scope', '$state', function($scope,$state){
    	
    	$scope.headerFactory = {
    		logoName: "Logo",
    	};

    	$scope._init = function() {

    	};

    	$scope.performLogout = function() {

    		$state.go('login');
    	};
    }]);
})();