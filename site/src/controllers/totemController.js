var totemModel = require("../models/totemModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA totem Controller");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    totemModel.listar()
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


function cadastrar(req, res) {
    console.log("to no controller")

    // Variaveis que são pegar do HTML e são passadas para o banco
    var dataFabricacao = req.body.dataDeFabricacaoServer;
    var numeroDeIndentificacao = req.body.numeroDeIdentificacaoServer;
    var marca = req.body.marcaServer;
    var sistemaOperacional = req.body.sistemaOperacionalServer;
    var capacidadeDeMemoriaRam = req.body.capacidadeDeMemoriaRamServer;
    var capacidadeDeCPU = req.body.capacidadeDeCPUServer;
    var capacidadeDeTemperatura = req.body.capacidadeDeTemperaturaServer;
    var capacidadeDeDisco = req.body.capacidadeDeDiscoServer;
    var fkEmpresa = req.body.fkEmpresaServer;

    console.log(dataFabricacao, numeroDeIndentificacao, marca, sistemaOperacional, capacidadeDeMemoriaRam, capacidadeDeCPU, capacidadeDeTemperatura, capacidadeDeDisco, fkEmpresa);

    // validações
    if (marca == undefined) {
        res.status(400).send("A marca está undefined!");
    } else if (sistemaOperacional == undefined) {
        res.status(400).send("O Sistema Operacional está undefined!");
    } else if (capacidadeDeCPU == undefined) {
        res.status(400).send("A capacidade de CPU está undefined!");
    } else if (dataFabricacao == undefined) {
        res.status(400).send("A data de fabricação está undefined!");
    } else if (numeroDeIndentificacao == undefined) {
        res.status(400).send("O número de identificação está undefined!");
    } else if (capacidadeDeMemoriaRam == undefined) {
        res.status(400).send("A capacidade de memória RAM está undefined!");
    } else if (capacidadeDeTemperatura == undefined) {
        res.status(400).send("A capacidade de temperatura está undefined!");
    } else if (capacidadeDeDisco == undefined) {
        res.status(400).send("A capacidade de disco está undefined!");
    } else if (fkEmpresa == undefined) {
        res.status(400).send("A chave estrangeira da empresa está undefined!");
    } else {

        // ATENÇÂO NA HORA DE PASSAR O PARAMETRO
        totemModel.cadastrar(numeroDeIndentificacao, sistemaOperacional, dataFabricacao, marca, capacidadeDeMemoriaRam, capacidadeDeDisco, capacidadeDeCPU, capacidadeDeTemperatura, fkEmpresa)
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
    testar
}