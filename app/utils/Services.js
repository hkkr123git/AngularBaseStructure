/*
	Service
	**************
	This page is used to make api calls easier.
	We can customize this file for handling auth token mechanisms by overriding success and error callbacks.

*/


var Service = {


	doPost : function(http, url, data, successCallback, errorCallback, configValue) {

		/*
			doPost is used to invoke a POST method.
			http : $http service variable from angular
			url : invoking endpoint
			data : json data to post to the endpoint
			configValue : Its also a json object to configure the angular service calls
		*/

		var config = {};

		if(typeof configValue != "undefined") {
			config = configValue;
		}

		return http.post(url, data, config).success(function(data, status, headers, config) {
			
			successCallback(data, status, headers, config);

		}).error(function(data, status, headers, config){
			
			errorCallback(data, status, headers, config);
			
		});
	},

	doGet : function(http, url, successCallback, errorCallback, configValue) {

		/*
			doGet is used to invoke a POST method.
			http : $http service variable from angular
			url : invoking endpoint
			configValue : Its also a json object to configure the angular service calls
		*/

		var config = {};

		if(typeof configValue != "undefined") {
			config = configValue;
		}

		return http.get(url, config).success(successCallback).error(function(data, status, headers, config) {

			errorCallback(data, status, headers, config);
			
		});
	},

	doPut : function(http, url, data, successCallback, errorCallback, configValue) {

		/*
			doPut is used to invoke a POST method.
			http : $http service variable from angular
			url : invoking endpoint
			data : json data to update
			configValue : Its also a json object to configure the angular service calls
		*/

		var config = {};

		if(typeof configValue != "undefined") {
			config = configValue;
		}

		return http.put(url, data, config).success(successCallback).error(function(data, status, headers, config){
			errorCallback(data, status, headers, config);
			
		});
	},

	doDelete : function(http, url, successCallback, errorCallback, configValue) {

		/*
			doDelete is used to invoke a POST method.
			http : $http service variable from angular
			url : invoking endpoint
			configValue : Its also a json object to configure the angular service calls
		*/
		
		var config = {};

		if(typeof configValue != "undefined") {
			config = configValue;
		}

		return http.delete(url, config).success(successCallback).error(function(data, status, headers, config){

			errorCallback(data, status, headers, config);
		});
	}
}