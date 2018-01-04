angular.module("app").factory("imoveisAPI", function ($http,val) {
	var _getImoveis = function () {
		return $http.get(val.baseUrl + "/imovel");
	};

	var _getImovel = function (id) {
		return $http.get(val.baseUrl + "/imovel/" + id);
	};

	var _saveImovel = function (imovel) {
		
		return $http.post(val.baseUrl + "/imovel", imovel);
	};
	var _updateImovel = function (id,imovel) {
		console.log(imovel);
		return $http.put(val.baseUrl + "/imovel/" + id, imovel);
	};
	var _deleteImovel = function (id) {		
		return $http.delete(val.baseUrl + "/imovel/" + id);
	};

	return {
		getImoveis: _getImoveis,
		getImovel: _getImovel,
		saveImovel: _saveImovel,
		updateImovel: _updateImovel,
		deleteImovel: _deleteImovel
	};
});