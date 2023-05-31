var database = require("../database/config");

function buscarUltimasMedidas(idFilial, numeroTotem) {
    console.log("entrou no model")
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT *
        FROM monitoramentoderecursos
        WHERE fkEmpresa = '${idFilial}' AND fkTotem = '${numeroTotem}'
        ORDER BY DataHora DESC;
        
`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select * from monitoramentoderecursos where fkEmpresa = '${idFilial}' and fkTotem = '${numeroTotem}' order by DataHora desc;
                `;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarOcorrencia(Titulo, Descricao, DataDaOcorrencia, numeroTotem, idFilial) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", Titulo, Descricao, DataDaOcorrencia, numeroTotem, idFilial);
    
    //  Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `    `;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        insert into RegistrosOcorrencias (descricao, fkTotem,fkEmpresa,dataDaOcorencia,titulo) values ('${Descricao}','${numeroTotem}','${idFilial}','${DataDaOcorrencia}','${Titulo}');
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `INSERT INTO Empresa (Nome, idEmpresa, CEP, Lougradouro, Numero, Estado, Cidade, Filial) 
        VALUES ('${nome}', '${cnpj}', ${cep}, '${lougradouro}', ${numero}, '${estado}', '${cidade}', '${matriz}');
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function buscarParametro(idFilial, numeroTotem) {
    console.log("entrou no model")
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select * from Limites where fkTotem = '${numeroTotem}' and fkEmpresa = '${idFilial}' order by idLimites asc;
        
`
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select * from Limites where fkTotem = '${numeroTotem}' and fkEmpresa = '11.111.111/1111-12';
        `;

    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal(idFilial, numeroTotem) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        // instrucaoSql = `select top 1
        // dh${numeroTotem}1_temperatura as temperatura, 
        // dh${numeroTotem}1_umidade as umidade,  
        //                 CONVERT(varchar, momento, 108) as momento_grafico, 
        //                 fk_aquario 
        //                 from medida where fk_aquario = ${idAquario} 
        //             order by id desc`;
        instrucaoSql = `
        SELECT TOP 1 *
        FROM MonitoramentoDeRecursos
        WHERE fkEmpresa = '${idFilial}' AND fkTotem = '${numeroTotem}'
        ORDER BY idCapacidade DESC;
        
        `


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select 
        // dh${numeroTotem}1_temperatura as temperatura, 
        // dh${numeroTotem}1_umidade as umidade,
        //                 DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
        //                 fk_aquario 
        //                 from medida where fk_aquario = ${idAquario} 
        //             order by id desc limit 1`;
        instrucaoSql = `
        select * from MonitoramentoDeRecursos where fkEmpresa = '${idFilial}' and fkTotem = '${numeroTotem}' order by idCapacidade desc limit 1;
        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
function buscarMedidasReinicizalicao(idFilial) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `
        SELECT Data, COUNT(Data) as Total, fkTotem
        FROM Reinicializacoes
        WHERE MONTH(Data) >= 5 AND DAY(Data) >= 0 AND MonitoramentoDeRecursos_fkEmpresa = '${idFilial}'
        GROUP BY Data, fkTotem
        ORDER BY Data
        OFFSET 0 ROWS
        FETCH NEXT 1000 ROWS ONLY;
        `


    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `
        SELECT Data, COUNT(Data) as Total, Limites_fkTotem as fkTotem
        FROM Reinicializacoes
        WHERE MONTH(Data) >= 5 AND DAY(Data) >= 0 AND MonitoramentoDeRecursos_fkEmpresa = '11.111.111/1111-12'
        GROUP BY Data, fkTotem
        LIMIT 0, 1000;        `
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
gerarPDF
function gerarPDF(idFilial) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFilial);
    var instrucao = '';
        instrucao = `
       
SELECT *
FROM Reinicializacoes R
JOIN (
    SELECT L.idLimites, L.MemoriaRamLimite, L.CPULimite, L.fkTotem, L.fkEmpresa
    FROM Limites L
    INNER JOIN (
        SELECT DISTINCT fkTotem, fkEmpresa
        FROM Reinicializacoes
        WHERE fkEmpresa = '${idFilial}'
    ) RL ON RL.fkTotem = L.fkTotem AND RL.fkEmpresa = L.fkEmpresa
) L ON R.fkLimites = L.idLimites
JOIN MonitoramentoDeRecursos M ON R.MonitoramentoDeRecursos_idCapacidade = M.idCapacidade
    AND R.MonitoramentoDeRecursos_fkEmpresa = M.fkEmpresa
    AND R.MonitoramentoDeRecursos_FkNumIdenti = M.fkTotem
WHERE R.fkEmpresa = '${idFilial}';;        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarOcorrencias2(idFilial) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFilial);
    var instrucao = '';
        instrucao = `
        SELECT  * FROM RegistrosOcorrencias where fkEmpresa = '${idFilial}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarOcorrencias(idFilial) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFilial);
    var instrucao = '';
        instrucao = `
        SELECT COUNT(*) AS TotalRows FROM RegistrosOcorrencias where fkEmpresa = '${idFilial}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function editarParametro(idFilial, numeroTotem, atencaoRam, criticoRam, atencaoCpu, criticoCpu, primeiro) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", idFilial, numeroTotem, atencaoRam, criticoRam, atencaoCpu, criticoCpu, primeiro);
    var instrucao = '';
    if (primeiro == 1) {
        instrucao = `
        UPDATE Limites
        SET MemoriaRamLimite = ${atencaoRam} , CPULimite = ${atencaoCpu}
        WHERE idLimites = 'atencao' AND fkTotem = '${numeroTotem}' AND fkEmpresa = '${idFilial}';    `;
    }
    else {
        instrucao = `
        UPDATE Limites
        SET MemoriaRamLimite = ${criticoRam}, CPULimite = ${criticoCpu}
        WHERE idLimites = 'critico' AND fkTotem = '${numeroTotem}' AND fkEmpresa = '${idFilial}';    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
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
