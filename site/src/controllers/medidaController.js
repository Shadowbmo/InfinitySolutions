var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
console.log('Entrou no buscar Ultimas medidas')
    var numeroTotem = req.params.numeroDeIdentificacao
    var idFilial = req.params.idFilial;
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);
    console.log("-------------- NUMERO DO TOTEM ---------------------" + numeroTotem)



    medidaModel.buscarUltimasMedidas(idFilial, numeroTotem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function cadastrarOcorrencia(req, res) {
    console.log("ENTROUASDJKSADJLSAKJDKSAJDLKASJDLKSAJDLSAJDSAKJLDSKALJDLKSA")
    var numeroTotem = req.params.numeroDeIdentificacao
    var idFilial = req.params.idFilial;
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);
  let  Titulo = req.body.titulo; 
  let  Descricao = req.body.descricao; 
  let  DataDaOcorrencia = req.body.dataDaOcorrencia; 

    // validações
    if (Titulo == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else {
        
        // ATENÇÂO NA HORA DE PASSAR O PARAMETRO
        medidaModel.cadastrarOcorrencia(Titulo, Descricao, DataDaOcorrencia, numeroTotem, idFilial)
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
gerarPDF
function gerarPDF(req, res) {
    var idFilial = req.params.idFilial;
    console.log("TANOCONTROLLERRRRRRRRRRRRRRRRRRRR")
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);

    medidaModel.gerarPDF(idFilial)
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
function listarOcorrencias2(req, res) {
    var idFilial = req.params.idFilial;
    console.log("TANOCONTROLLERRRRRRRRRRRRRRRRRRRR")
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);

    medidaModel.listarOcorrencias2(idFilial)
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
function listarOcorrencias(req, res) {
    var idFilial = req.params.idFilial;
    console.log("TANOCONTROLLERRRRRRRRRRRRRRRRRRRR")
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);

    medidaModel.listarOcorrencias(idFilial)
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
function editarParametro(req, res) {
    var numeroTotem = req.params.numeroDeIdentificacao
    var idFilial = req.params.idFilial;
    let atencaoRam = req.body.atencaoRam ;
    let criticoRam = req.body.criticoRam ;
    let atencaoCpu = req.body.atencaoCpu ;
    let criticoCpu = req.body.criticoCpu ; 
    let primeiro = req.body.primeiro;

    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);

    medidaModel.editarParametro(idFilial, numeroTotem, atencaoRam, criticoRam, atencaoCpu, criticoCpu, primeiro)
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

function buscarParametro(req, res) {
    console.log('Entrou no buscar Ultimas medidas')
        var numeroTotem = req.params.numeroDeIdentificacao
        var idFilial = req.params.idFilial;
        idFilial = idFilial.substr(0, 2) + '.' +
        idFilial.substr(2, 3) + '.' +
        idFilial.substr(5, 3) + '/' +
        idFilial.substr(8, 4) + '-' +
        idFilial.substr(12, 2);
        console.log("-------------- NUMERO DO TOTEM ---------------------" + numeroTotem)
    
    
    
        medidaModel.buscarParametro(idFilial, numeroTotem).then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
    }
    

function buscarMedidasEmTempoReal(req, res) {
    var numeroTotem = req.params.numeroDeIdentificacao
    var idFilial = req.params.idFilial;
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);
    console.log(`Recuperando medidas em tempo real`);

    medidaModel.buscarMedidasEmTempoReal(idFilial, numeroTotem).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedidasReinicizalicao(req, res) {
    var idFilial = req.params.idFilial;
    idFilial = idFilial.substr(0, 2) + '.' +
    idFilial.substr(2, 3) + '.' +
    idFilial.substr(5, 3) + '/' +
    idFilial.substr(8, 4) + '-' +
    idFilial.substr(12, 2);
    console.log(`Recuperando medidas em tempo real`);
    console.log(`TONACONTROLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE`)
    medidaModel.buscarMedidasReinicizalicao(idFilial).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarMedidasReinicizalicao,
    buscarParametro,
    editarParametro,
    cadastrarOcorrencia,
    listarOcorrencias,
    listarOcorrencias2,
    gerarPDF

}