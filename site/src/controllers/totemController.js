var totemModel = require("../models/totemModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA totem Controller");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    var id = req.params.id;
    id = id.substr(0, 2) + '.' +
    id.substr(2, 3) + '.' +
    id.substr(5, 3) + '/' +
    id.substr(8, 4) + '-' +
    id.substr(12, 2);

    totemModel.listar(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta do totem! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listar2(req, res) {
    var id = req.params.id;
    id = id.substr(0, 2) + '.' +
    id.substr(2, 3) + '.' +
    id.substr(5, 3) + '/' +
    id.substr(8, 4) + '-' +
    id.substr(12, 2);

    totemModel.listar2(id)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta do totem! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}
function deletar(req, res) {
    var id = req.params.fkEmpresa;
    let fkTotem = req.params.fkTotem;
    id = id.substr(0, 2) + '.' +
    id.substr(2, 3) + '.' +
    id.substr(5, 3) + '/' +
    id.substr(8, 4) + '-' +
    id.substr(12, 2);

    totemModel.deletar(id, fkTotem)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    )
    .catch(
        function (erro) {
            console.log(erro);
            console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}




function cadastrar(req, res) {
    console.log("to no controller")

    // Variaveis que são pegar do HTML e são passadas para o banco
    var dataFabricacao = req.body.dataDeFabricacaoServer;
    var numeroDeIndentificacao = req.body.numeroDeIdentificacaoServer;
    var marca = req.body.marcaServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    var fkMatriz = req.body.fkMatriz;
    var sistemaOperacional = req.body.sistemaOperacionalServer;

    fkMatriz = fkMatriz.substr(0, 2) + '.' +
    fkMatriz.substr(2, 3) + '.' +
    fkMatriz.substr(5, 3) + '/' +
    fkMatriz.substr(8, 4) + '-' +
    fkMatriz.substr(12, 2);

    console.log(dataFabricacao, numeroDeIndentificacao, marca, sistemaOperacional, fkEmpresa, fkMatriz);

    // validações
    if (fkEmpresa == undefined) {
        res.status(400).send("A chave estrangeira da empresa está undefined!");
    } else {

        // ATENÇÂO NA HORA DE PASSAR O PARAMETRO
        totemModel.cadastrar(dataFabricacao, numeroDeIndentificacao, marca, sistemaOperacional, fkEmpresa, fkMatriz)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de seu totem! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function cadastrarLimite(req, res) {
    console.log("to no controller")

    // Variaveis que são pegar do HTML e são passadas para o banco
    var numeroDeIndentificacao = req.body.numeroDeIdentificacaoServer;
    var fkEmpresa = req.body.fkEmpresaServer;
    var primeiro = req.body.primeiro;

    // validações
    if (fkEmpresa == undefined) {
        res.status(400).send("A chave estrangeira da empresa está undefined!");
    } else {

        // ATENÇÂO NA HORA DE PASSAR O PARAMETRO
        totemModel.cadastrarLimite(numeroDeIndentificacao, fkEmpresa, primeiro)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de seu totem! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar,
    listar,
    testar,
    cadastrarLimite,
    deletar
}