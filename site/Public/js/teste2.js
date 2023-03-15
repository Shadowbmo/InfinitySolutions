function verificar() {
    console.log("verificado")
    var larguraTela = window.innerWidth;
          
          // Redireciona para outra página se a largura da tela for menor que 700 pixels
          if (larguraTela > 743) {
            window.location.href = "./telaLogin.html";
          }
}

setInterval(verificar, 500);

verificar();