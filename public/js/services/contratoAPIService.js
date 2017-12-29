angular.module("app").factory("contratoAPI", function ($http,val) {
	var _getContratos = function () {
		return $http.get(val.baseUrl + "/contrato");
	};

	var _getContrato = function (id) {
		return $http.get(val.baseUrl + "/contrato/" + id);
	};

	var _getContratoUser = function (id) {
		return $http.get(val.baseUrl + "/contrato/user/" + id);
	};

	var _saveContrato = function (contrato) {		
		return $http.post(val.baseUrl + "/contrato", contrato);
	};
	
	var _updateContrato = function (id,contrato) {		
		return $http.put(val.baseUrl + "/contrato/" + id, contrato);
	};

	var _deleteContrato = function (id) {		
		return $http.delete(val.baseUrl + "/contrato/" + id);
	};

	return {
		getContratos: _getContratos,
		getContrato: _getContrato,
		getContratoUser: _getContratoUser,
		saveContrato: _saveContrato,
		updateContrato: _updateContrato,
		deleteContrato: _deleteContrato
	};
});