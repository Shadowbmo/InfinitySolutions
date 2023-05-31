var database = require("../database/config")

function listar(id) {
    var instrucao = `
        SELECT * FROM Totem where fkMatriz = '${id}' and status = 'ativo';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(id, fkTotem){
    var instrucao = `
        update Totem set status = 'desativado' where fkEmpresa = '${id}' and NumIdenti = '${fkTotem}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(dataFabricacao, numeroDeIndentificacao, marca, sistemaOperacional, fkEmpresa, fkMatriz) {
    var instrucao = `  `;

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `INSERT INTO Totem (NumIdenti, so, DataFabrica, Marca,  CapacidadeDeMemoriaRam,
             CapacidadeDeDisco,CapacidadeDeCPU, CapacidadeDeTemperatura, fkEmpresa, statusDeFuncionamento, fkMatriz) 
             VALUES ( '${numeroDeIndentificacao}','${sistemaOperacional}','${dataFabricacao}', '${marca}',
             '${capacidadeDeMemoriaRam}', '${capacidadeDeDisco}', '${capacidadeDeCPU}', '${capacidadeDeTemperatura}',
              '${fkEmpresa}', 'Ativo', '${fkMatriz}');`;


    } else if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `INSERT INTO Totem (NumIdenti, so, data, Marca, fkEmpresa, fkMatriz, status) 
        VALUES ( '${numeroDeIndentificacao}','${sistemaOperacional}','${dataFabricacao}', '${marca}', 
        '${fkEmpresa}','${fkMatriz}','Ativo');
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarLimite(numeroDeIndentificacao, fkEmpresa, primeiro) {
    var instrucao = `  `;

 if (primeiro == 1) {
        instrucao = `
        insert into Limites values ('atencao',20, 30, '${numeroDeIndentificacao}', '${fkEmpresa}');
        `;
    } else {
        instrucao = `
        insert into Limites values ('critico',50, 50, '${numeroDeIndentificacao}', '${fkEmpresa}');
        `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    cadastrarLimite,
    deletar
};