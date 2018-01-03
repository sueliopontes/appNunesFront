angular.module("app").factory("bancoAPI", function ($http,val) {	

	var _getBanco = function (id) {
		return $http.get(val.baseUrl + "/banco/" + id);
	};
	
	var _saveBanco = function (banco) {		
		return $http.post(val.baseUrl + "/banco", banco);
	};

	var _updateBanco = function (banco) {
		
		return $http.put(val.baseUrl + "/banco/" + banco.id, banco);
	};
	var _deleteBanco = function (id) {		
		return $http.delete(val.baseUrl + "/banco/" + id);
	};

	return {		
		getBanco: _getBanco,		
		saveBanco: _saveBanco,
		updateBanco: _updateBanco,
		deleteBanco: _deleteBanco
	};
});