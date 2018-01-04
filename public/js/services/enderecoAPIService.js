angular.module("app").factory("enderecoAPI", function ($http,val) {
	
	var _getEndereco = function (id) {
		return $http.get(val.baseUrl + "/endereco/" + id);
	};

	var _saveEndereco = function (endereco) {		
		return $http.post(val.baseUrl + "/endereco", endereco);
	};

	var _updateEndereco = function (endereco) {		
		return $http.put(val.baseUrl + "/endereco/" + endereco.id, endereco);
	};
	
	var _deleteEndereco = function (id) {		
		return $http.delete(val.baseUrl + "/endereco/" + id);
	};

	return {		
		getEndereco: _getEndereco,		
		saveEndereco: _saveEndereco,
		updateEndereco: _updateEndereco,
		deleteEndereco: _deleteEndereco
	};
});