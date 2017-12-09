angular.module("app").factory("endereco3API", function ($http,val) {
	var _getEnderecos = function () {
		return $http.get(val.baseUrl + "/endereco3");
	};

	var _getEndereco = function (id) {
		return $http.get(val.baseUrl + "/endereco3/" + id);
	};
	var _getEnderecoUser = function (id) {
		return $http.get(val.baseUrl + "/endereco3/user/" + id);
	};

	var _saveEndereco = function (endereco) {
		
		return $http.post(val.baseUrl + "/endereco3", endereco);
	};
	var _updateEndereco = function (id,endereco) {
		console.log(endereco);
		return $http.put(val.baseUrl + "/endereco3/" + id, endereco);
	};
	var _deleteEndereco = function (id) {		
		return $http.delete(val.baseUrl + "/endereco3/" + id);
	};

	return {
		getEnderecos: _getEnderecos,
		getEndereco: _getEndereco,
		getEnderecoUser: _getEnderecoUser,
		saveEndereco: _saveEndereco,
		updateEndereco: _updateEndereco,
		deleteEndereco: _deleteEndereco
	};
});