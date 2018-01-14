angular.module("app").controller("locatarioNewCtrl2", function ($scope, $location, pessoaAPI, bancoAPI, enderecoAPI, contatoAPI, conjugeAPI, ocupacaoAPI, rcAPI, rpAPI) {

    $scope.adicionarLocatario = function (locatario, endereco, contato, banco, conjuge, ocupacao, rc, rp) {
        locatario.user_tipo = 1;
        var pessoaId = 0;
        pessoaAPI.savePessoa(locatario).success(function (data) {
            pessoaId = data.data.id;
            banco.user_id = pessoaId;           
            bancoAPI.saveBanco(banco).success(function (data) {
               conjuge.user_id = pessoaId;
                conjugeAPI.saveConjuge(conjuge).success(function (data) {
                    contato.user_id = pessoaId;
                    contatoAPI.saveContato(contato).success(function (data) {
                        endereco.user_id = pessoaId;
                        enderecoAPI.saveEndereco(endereco).success(function (data) {
                            ocupacao.user_id = pessoaId;
                            ocupacaoAPI.saveOcupacao(ocupacao).success(function (data) {
                                rc.user_id = pessoaId;
                                rcAPI.saveRC(rc).success(function (data) {
                                    rp.user_id = pessoaId;
                                    rpAPI.saveRP(rp).success(function (data) {
                                        $location.path("/locatarioEdit/" + pessoaId);                            
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    };
});