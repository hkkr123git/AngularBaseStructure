'use strict';

(function(){
    var app = angular.module('aModule');
    
    app.controller('aBaseCntrlr', function($scope, $http){
    	
        $scope.modelFactory = {
            personResultSet : [],
            personRowsIsEditable : [],
            newName : "",
            newAge : "",
            createButton : "Create"

        };

    	$scope._init = function() {

    		invokeGellAllDetails();
    	};

        $scope.initCreate = function() {


            var createSuccess = function(data, status, header, config) {
                $scope.modelFactory.createButton = "Create";
                if(data.responseCode == 600) {
                    var tmpObj = {"name":$scope.modelFactory.newName, "age":$scope.modelFactory.newAge};
                    $scope.modelFactory.personResultSet.push(tmpObj);

                    $scope.modelFactory.newName = "";
                    $scope.modelFactory.newAge = "";
                } else {
                    alert("Soory an internal error has occured!");    
                }
            };

            var createError = function(data, status, header, config) {
                $scope.modelFactory.createButton = "Create";
                alert("Soory an internal error has occured!");
            };

            if($scope.modelFactory.newName && $scope.modelFactory.newAge) {

                $scope.modelFactory.createButton = "Creating...";
                var data = {
                    name: $scope.modelFactory.newName,
                    age: $scope.modelFactory.newAge
                };

                Service.doPost($http, API_POST, data, createSuccess, createError);   

            } else {
                alert("Please fill details!");
            }

            
        };

        $scope.initEdit = function(selectedPersonRow) {
            $scope.modelFactory.personRowsIsEditable[selectedPersonRow] = true;
        };

        $scope.initSave = function(personObj, selectedPersonRow) {

            $scope.modelFactory.personRowsIsEditable[selectedPersonRow] = false;

            var updateSuccess = function(data, status, header, config) {
                alert("Updated successfully!");
            };

            var updateError = function(data, status, header, config) {
                alert("An error occurred while updating details!");
            };

            if(personObj.name && personObj.age) {
                
                var data = {
                    name : personObj.name,
                    age : personObj.age
                };

                var url = Util.beautifyUrl(API_PUT, [personObj.id]);
                Service.doPut($http, url, data, updateSuccess, updateError);
            }
        };

        $scope.initDelete = function(personObj, selectedPersonRow) {

            if(confirm("Do you really want to delete this person ?")){

                var deleteSuccess = function(data, status, header, config) {

                    if(data.responseCode == 600) {

                        alert("Person has been deleted successfully!");
                        $scope.modelFactory.personResultSet.splice(selectedPersonRow, 1);

                    } else {
                        alert("Sorry! person couldn't deleted successfully!");
                    }
                };

                var deleteError = function(data, status, header, config) {
                    alert("Sorry! person couldn't deleted successfully!");
                };

                var url = Util.beautifyUrl(API_DELETE, [personObj.id]);
                Service.doDelete($http, url, deleteSuccess, deleteError);
            }
        };

    	var invokeGellAllDetails = function() {

    		var getDetailsSuccess = function(data, status, header, config){

    			$scope.modelFactory.personResultSet = data.data;
    		};

    		var getDetailsError = function(data, status, header, config){
    			alert("Oops! an internal occurred!");
    		};

    		Service.doGet($http, API_GET, getDetailsSuccess, getDetailsError);
    	}

    });
})();