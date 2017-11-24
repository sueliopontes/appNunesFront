angular.module("app").factory("enderecoAPI", function ($http,val) {
	var _getEnderecos = function () {
		return $http.get(val.baseUrl + "/endereco");
	};

	var _getEndereco = function (id) {
		return $http.get(val.baseUrl + "/endereco/" + id);
	};
	var _getEnderecoUser = function (id) {
		return $http.get(val.baseUrl + "/endereco/user/" + id);
	};

	var _saveEndereco = function (endereco) {
		
		return $http.post(val.baseUrl + "/endereco", endereco);
	};
	var _updateEndereco = function (id,endereco) {
		console.log(endereco);
		return $http.put(val.baseUrl + "/endereco/" + id, endereco);
	};
	var _deleteEndereco = function (id) {		
		return $http.delete(val.baseUrl + "/endereco/" + id);
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