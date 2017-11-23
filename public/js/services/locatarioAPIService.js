angular.module("app").factory("locatarioAPI", function ($http,val) {
	var _getLocatarios = function () {
		return $http.get(val.baseUrl + "/locatario");
	};

	var _getLocatario = function (id) {
		return $http.get(val.baseUrl + "/locatario/" + id);
	};

	var _saveLocatario = function (locatario) {
		
		return $http.post(val.baseUrl + "/locatario", locatario);
	};
	var _updateLocatario = function (id,locatario) {
		console.log(locatario);
		return $http.put(val.baseUrl + "/locatario/" + id, locatario);
	};
	var _deleteLocatario = function (id) {		
		return $http.delete(val.baseUrl + "/locatario/" + id);
	};

	return {
		getLocatarios: _getLocatarios,
		getLocatario: _getLocatario,
		saveLocatario: _saveLocatario,
		updateLocatario: _updateLocatario,
		deleteLocatario: _deleteLocatario
	};
});