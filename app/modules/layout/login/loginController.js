'use strict';

(function(){
    var app = angular.module('testApp');
    
    app.controller('loginCntrlr', ['$scope', '$state', function($scope, $state){
        $scope.model = {
            btnText:'Log In',
            formData:{
                userName:'',
                pass:''
            }
        };
        
        $scope.loginClick = function(){
            if($scope.model.formData.userName === 'a' && $scope.model.formData.pass === 'a'){
                $state.go('root.a');
            }
        };
    }]);
})();