var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome,  matriz, cnpj, cep, lougradouro, numero, estado, cidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome,  matriz, cnpj,  cep, lougradouro, numero, estado, cidade);
    
    //  Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `    `;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `INSERT INTO Empresa (Nome, idEmpresa, CEP, Lougradouro, Numero, Estado, Cidade, Filial) 
        VALUES ('${nome}', '${cnpj}', ${cep}, '${lougradouro}', ${numero}, '${estado}', '${cidade}', '${matriz}');
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

module.exports = {
    cadastrar,
    listar,
};