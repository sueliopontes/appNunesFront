angular.module("app").factory("contato2API", function ($http,val) {
	var _getContatos = function () {
		return $http.get(val.baseUrl + "/contato2");
	};

	var _getContato = function (id) {
		return $http.get(val.baseUrl + "/contato2/" + id);
	};

	var _getContatoUser = function (id) {
		return $http.get(val.baseUrl + "/contato2/user/" + id);
	};
	var _saveContato = function (contato) {
		
		return $http.post(val.baseUrl + "/contato2", contato);
	};
	var _updateContato = function (id,contato) {
		
		return $http.put(val.baseUrl + "/contato2/" + id, contato);
	};
	var _deleteContato = function (id) {		
		return $http.delete(val.baseUrl + "/contato2/" + id);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		getContatoUser: _getContatoUser,
		saveContato: _saveContato,
		updateContato: _updateContato,
		deleteContato: _deleteContato
	};
});