angular.module("app").factory("ocupacaoAPI", function ($http,val) {
	

	var _getOcupacao = function (id) {
		return $http.get(val.baseUrl + "/ocupacao/" + id);
	};	

	var _saveOcupacao = function (ocupacao) {
		
		return $http.post(val.baseUrl + "/ocupacao", ocupacao);
	};
	var _updateOcupacao = function (id,ocupacao) {
		console.log(ocupacao);
		return $http.put(val.baseUrl + "/ocupacao/" + id, ocupacao);
	};
	var _deleteOcupacao = function (id) {		
		return $http.delete(val.baseUrl + "/ocupacao/" + id);
	};

	return {		
		getOcupacao: _getOcupacao,		
		saveOcupacao: _saveOcupacao,
		updateOcupacao: _updateOcupacao,
		deleteOcupacao: _deleteOcupacao
	};
});