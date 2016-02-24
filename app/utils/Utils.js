var Util = {

	isEmpty : function(data) {
		var isTrue = false;

		if(data != null && typeof data != "undefined" && data != "") {
			isTrue = true;
		}

		return isTrue;
	},

	beautifyUrl : function(urlString, params) {

		angular.forEach(params, function(value, key) {
			urlString = urlString.replace("{?}", value);
		});

		return urlString;
	},

	makeArrayUnique : function(arr) {

	    var hash = {}, result = [];

	    for ( var i = 0, l = arr.length; i < l; ++i ) {
	        if ( !hash.hasOwnProperty(arr[i]) ) {
	            hash[ arr[i] ] = true;
	            result.push(arr[i]);
	        }
	    }

	    return result;
	},

	isObjectEmpty : function(obj) {

		var isEmptyValue = true;

	    for(var prop in obj) {
	        if(obj.hasOwnProperty(prop)) {
	        	isEmptyValue = false;
	        }
	    }

	    return isEmptyValue;
	},

	saveToLocalStorage : function(key, value) {
	
		if (typeof(Storage) != "undefined") {
		    localStorage.setItem(key, value);
		}
	},

	getFromLocalStorage : function(key) {
		
		if (typeof(Storage) != "undefined") {
		   return localStorage.getItem(key);
		}
	},

	


}