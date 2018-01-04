angular.module("app").factory("rpAPI", function ($http,val) {
	
	var _getRPS = function (id) {
		return $http.get(val.baseUrl + "/rps/" + id);
	};
	
	var _getRP = function (id) {
		return $http.get(val.baseUrl + "/rp/" + id);
	};

	var _saveRP = function (rp) {		
		return $http.post(val.baseUrl + "/rp", rp);
	};
	var _updateRP = function (rp) {		
		return $http.put(val.baseUrl + "/rp/" + rp.id, rp);
	};
	var _deleteRP = function (id) {		
		return $http.delete(val.baseUrl + "/rp/" + id);
	};

	return {		
		getRP: _getRP,
		getRPS: _getRPS,		
		saveRP: _saveRP,
		updateRP: _updateRP,
		deleteRP: _deleteRP
	};
});