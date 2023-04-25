Cadastro
if (nomeFantasia == "" || cnpj == "" || emailVar == "" || senhaVar == "" || confirmaçãoSenhaVar == "") {
    mensagem_erro.innerHTML = "Preencha todos os campos";

    return false;
  }

  if (nomeFantasia.length < 6) {
    mensagem_erro.innerHTML = "Seu nome de usuário deve conter mais de 6 dígitos"
    
    return false;
  }

  if (emailVar.indexOf("@") < 3 || emailVar.indexOf(" ") >= 0 || !emailVar.indexOf(".")) {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Email inválido"
    
    return false;
  }

  if (senhaVar.length < 8) {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Senha curta deve conter no mínimo 8 dígitos"
    
    return false;
  }

  if (senhaVar != confirmaçãoSenhaVar) {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Senhas incompátiveis"
    
    return false;
  }

Login 
if (emailVar == "" || senhaVar == "") {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Preencha todos os campos";
    
    return false;
  }
  
  if (emailVar.indexOf("@") < 3 || emailVar.indexOf(" ") >= 0 || !emailVar.indexOf(".")) {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Email inválido"
   
    return false;
  }

  if (senhaVar.length < 8) {
    cardErro.style.display = "block"
    mensagem_erro.innerHTML = "Senha Incorreta"
    
    return false;
  }