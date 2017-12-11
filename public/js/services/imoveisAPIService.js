angular.module("app").factory("imoveisAPI", function ($http,val) {
	var _getImoveis = function () {
		return $http.get(val.baseUrl + "/imoveisFull");
	};

	var _getImovel = function (id) {
		return $http.get(val.baseUrl + "/imoveis/" + id);
	};

	var _saveImovel = function (imovel) {
		
		return $http.post(val.baseUrl + "/imoveis", imovel);
	};
	var _updateImovel = function (id,imovel) {
		console.log(imovel);
		return $http.put(val.baseUrl + "/imoveis/" + id, imovel);
	};
	var _deleteImovel = function (id) {		
		return $http.delete(val.baseUrl + "/imoveis/" + id);
	};

	return {
		getImoveis: _getImoveis,
		getImovel: _getImovel,
		saveImovel: _saveImovel,
		updateImovel: _updateImovel,
		deleteImovel: _deleteImovel
	};
});