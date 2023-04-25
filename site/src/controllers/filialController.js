var filialModel = require("../models/filialModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA Filial Controller");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    filialModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! da filial Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function cadastrar(req, res) {
    // Variaveis que são pegar do HTML e são passadas para o banco
    var nome = req.body.nomeServer;
    var cep = req.body.cepServer;
    var cnpj  = req.body.cnpjServer;
    var lougradouro  = req.body.lougradouroServer;
    var numero  = req.body.numeroServer;
    var estado  = req.body.estadoServer;
    var cidade  = req.body.cidadeServer;
    var matriz  = req.body.matrizServer;

    // validações
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (matriz == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        // ATENÇÂO NA HORA DE PASSAR O PARAMETRO
        filialModel.cadastrar(nome, matriz, cnpj,  cep, lougradouro, numero, estado, cidade)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de filiais! Erro: ",
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
    testar
}