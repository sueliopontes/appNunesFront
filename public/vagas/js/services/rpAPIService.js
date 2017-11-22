angular.module("app").factory("rpAPI", function ($http,val) {
	var _getRPs = function () {
		return $http.get(val.baseUrl + "/rp");
	};

	var _getRP = function (id) {
		return $http.get(val.baseUrl + "/rp/" + id);
	};
	var _getRPUser = function (id) {
		return $http.get(val.baseUrl + "/rp/user/" + id);
	};

	var _saveRP = function (rp) {
		
		return $http.post(val.baseUrl + "/rp", rp);
	};
	var _updateRP = function (id,rp) {
		console.log(rp);
		return $http.put(val.baseUrl + "/rp/" + id, rp);
	};
	var _deleteRP = function (id) {		
		return $http.delete(val.baseUrl + "/rp/" + id);
	};

	return {
		getRPs: _getRPs,
		getRP: _getRP,
		getRPUser: _getRPUser,
		saveRP: _saveRP,
		updateRP: _updateRP,
		deleteRP: _deleteRP
	};
});