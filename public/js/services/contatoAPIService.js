angular.module("app").factory("contatoAPI", function ($http,val) {	

	var _getContato = function (id) {
		return $http.get(val.baseUrl + "/contato/" + id);
	};
	
	var _saveContato = function (contato) {
		
		return $http.post(val.baseUrl + "/contato", contato);
	};
	var _updateContato = function (contato) {
		
		return $http.put(val.baseUrl + "/contato/" + contato.id, contato);
	};
	var _deleteContato = function (id) {		
		return $http.delete(val.baseUrl + "/contato/" + id);
	};

	return {
		getContato: _getContato,		
		saveContato: _saveContato,
		updateContato: _updateContato,
		deleteContato: _deleteContato
	};
});