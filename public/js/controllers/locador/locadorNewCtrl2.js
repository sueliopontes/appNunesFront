angular.module("app").controller("locadorNewCtrl2", function ($scope, $location, pessoaAPI, enderecoAPI, contatoAPI) {

    $scope.adicionarLocador = function (locador, endereco, contato) {
        locador.user_tipo = 2;
        var pessoaId = 0;
        pessoaAPI.savePessoa(locador).success(function (data) {
            pessoaId = data.data.id;
            contato.user_id = pessoaId;
            contatoAPI.saveContato(contato).success(function (data) {
                endereco.user_id = pessoaId;
                enderecoAPI.saveEndereco(endereco).success(function (data) {
                    $location.path("/locadorEdit/" + pessoaId);
                });
            });
        });        
    };
});