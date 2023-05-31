var database = require("../database/config")

function listar(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()", id);
    var instrucao = `
        SELECT * FROM funcionario where fkMatriz = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
function listarTodasFiliais(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarTodasFiliais()", id);
    var instrucao = `
    select * from empresa where filial = '${id}';
        `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarTodosTotems(id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarTodosTotems()", id);
    var instrucao = `
    select * from Totem where fkEmpresa = '${id}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)

    if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {

        var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' or idEmpresa = '${email}' AND senha = '${senha}';
    `;
    }
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        var instrucao = `
        SELECT * FROM empresa WHERE email = '${email}' or idEmpresa = '${email}' AND senha = '${senha}';
    `;
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha, cnpj) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `INSERT INTO Empresa (Nome, idEmpresa, email, Senha, Filial) 
        VALUES ('${nome}', '${cnpj}', '${email}', '${senha}', '${cnpj}'); SELECT * FROM Empresa WHERE idEmpresa = '${cnpj}';
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucao = `INSERT INTO Empresa (Nome, idEmpresa, email, Senha, Filial) 
        VALUES ('${nome}', '${cnpj}', '${email}', '${senha}', '${cnpj}');
        `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    entrar,
    cadastrar,
    listarTodasFiliais,
    listarTodosTotems,
    listar,
};