angular.module("app").factory("imoveisAPI", function ($http,val) {
	var _getImoveiss = function () {
		return $http.get(val.baseUrl + "/imoveis");
	};

	var _getImoveis = function (id) {
		return $http.get(val.baseUrl + "/imoveis/" + id);
	};

	var _saveImoveis = function (imoveis) {
		
		return $http.post(val.baseUrl + "/imoveis", imoveis);
	};
	var _updateImoveis = function (id,imoveis) {
		console.log(imoveis);
		return $http.put(val.baseUrl + "/imoveis/" + id, imoveis);
	};
	var _deleteImoveis = function (id) {		
		return $http.delete(val.baseUrl + "/imoveis/" + id);
	};

	return {
		getImoveiss: _getImoveiss,
		getImoveis: _getImoveis,
		saveImoveis: _saveImoveis,
		updateImoveis: _updateImoveis,
		deleteImoveis: _deleteImoveis
	};
});