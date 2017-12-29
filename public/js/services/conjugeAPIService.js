angular.module("app").factory("conjugeAPI", function ($http,val) {
	
	var _getConjuges = function (id) {
		return $http.get(val.baseUrl + "/conjuges/" + id);
	};

	var _getConjuge = function (id) {
		return $http.get(val.baseUrl + "/conjuge/" + id);
	};
	
	var _saveConjuge = function (conjuge) {
		
		return $http.post(val.baseUrl + "/conjuge", conjuge);
	};
	var _updateConjuge = function (id,conjuge) {
		
		return $http.put(val.baseUrl + "/conjuge/" + id, conjuge);
	};
	var _deleteConjuge = function (id) {		
		return $http.delete(val.baseUrl + "/conjuge/" + id);
	};

	return {
		getConjuges: _getConjuges,
		getConjuge: _getConjuge,		
		saveConjuge: _saveConjuge,
		updateConjuge: _updateConjuge,
		deleteConjuge: _deleteConjuge
	};
});