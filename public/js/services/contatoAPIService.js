angular.module("app").factory("contatoAPI", function ($http,val) {
	var _getContatos = function () {
		return $http.get(val.baseUrl + "/contato");
	};

	var _getContato = function (id) {
		return $http.get(val.baseUrl + "/contato/" + id);
	};

	var _getContatoUser = function (id) {
		return $http.get(val.baseUrl + "/contato/user/" + id);
	};
	var _saveContato = function (contato) {
		
		return $http.post(val.baseUrl + "/contato", contato);
	};
	var _updateContato = function (id,contato) {
		
		return $http.put(val.baseUrl + "/contato/" + id, contato);
	};
	var _deleteContato = function (id) {		
		return $http.delete(val.baseUrl + "/contato/" + id);
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