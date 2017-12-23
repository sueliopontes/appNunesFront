angular.module("app").factory("pessoaAPI", function ($http,val) {
	var _getPessoas = function () {
		return $http.get(val.baseUrl + "/pessoa");
	};

	var _getLocatarios = function () {
		return $http.get(val.baseUrl + "/locatario");
	};

	var _getLocadores = function () {
		return $http.get(val.baseUrl + "/locador");
	};

	var _getPessoa = function (id) {
		return $http.get(val.baseUrl + "/pessoa/" + id);
	};

	var _savePessoa = function (pessoa) {
		
		return $http.post(val.baseUrl + "/pessoa", pessoa);
	};
	var _updatePessoa = function (id,pessoa) {
		console.log(pessoa);
		return $http.put(val.baseUrl + "/pessoa/" + id, pessoa);
	};
	var _deletePessoa = function (id) {		
		return $http.delete(val.baseUrl + "/pessoa/" + id);
	};

	return {
		getPessoas: _getPessoas,
		getLocatarios: _getLocatarios,
		getLocadores: _getLocadores,
		getPessoa: _getPessoa,
		savePessoa: _savePessoa,
		updatePessoa: _updatePessoa,
		deletePessoa: _deletePessoa
	};
});