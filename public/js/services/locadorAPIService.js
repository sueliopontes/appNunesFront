angular.module("app").factory("locadorAPI", function ($http,val) {
	var _getLocadors = function () {
		return $http.get(val.baseUrl + "/locador");
	};

	var _getLocador = function (id) {
		return $http.get(val.baseUrl + "/locador/" + id);
	};

	var _saveLocador = function (locador) {
		
		return $http.post(val.baseUrl + "/locador", locador);
	};
	var _updateLocador = function (id,locador) {
		console.log(locador);
		return $http.put(val.baseUrl + "/locador/" + id, locador);
	};
	var _deleteLocador = function (id) {		
		return $http.delete(val.baseUrl + "/locador/" + id);
	};

	return {
		getLocadors: _getLocadors,
		getLocador: _getLocador,
		saveLocador: _saveLocador,
		updateLocador: _updateLocador,
		deleteLocador: _deleteLocador
	};
});