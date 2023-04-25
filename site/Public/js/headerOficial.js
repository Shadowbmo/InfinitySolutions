var menuAberto = false;
function menu() {
  // EU SEI QUE É REDUNDANTE
  if (menuAberto == false) {
    header.innerHTML = "";
    menuAberto = true;
  } else {
    header.innerHTML = `
    <header>

      <div class="headerTopo">
      <div class="iconeHeader">
        <span class="icone"><i class="uil uil-user"></i> </span>
      </div>
      <div class="nomeHeader" id="nomeDoUsuario">
       Nome Usuario
      </div>
      <div class="menu" onclick="menu()">
      <i class="uil uil-list-ul"></i>
     </div>
  </div>


    <ul>
      <li class="botaoHeader" onclick="winInicio()">
        <i class="uil uil-home"></i> 
        <button>Inicio</button>
      </li>


      <li class="botaoHeader" onclick="winFuncionario()" >
        <i class="uil uil-user-plus"></i> 
        <button>Adicionar funcionario</button>
      </li>


      <li class="botaoHeader" onclick="winTotem()">
        <span class="arrumar">
          <img src="./assets/icones/totem.png" alt="">
        </span>
       <button>Adicionar totem</button>
      </li>


      <li class="botaoHeader" onclick="winFilial()">
        <span class="arrumar">
          <img src="./assets/icones/mercado.png" alt="">
        </span>        
        <button>Adicionar filial</button>
      </li>


      <li class="botaoHeader" onclick="winSuporte()">
        <i class="uil uil-comment-question"></i>
        <button>Suporte</button>
      </li>


      <li class="botaoHeader" onclick="ModoClaro()">
        <i class="uil uil-moon"></i> 
        <button>Modo Escuro</button>
      </li>


      <li class="botaoHeader" onclick="winSair()">
        <i class="uil uil-signout"></i>
        <button>sair</button>
      </li>
   
    </ul>
  </header>
    `;
    menuAberto = false;
    nomeDoUsuario.innerHTML = sessionStorage.NOME_USUARIO;

  }
};
menu();
function headerTop() {
  headerTopzinho.innerHTML = `
    <div class="menu" onclick="menu()">  
    <i class="uil uil-list-ul"></i>
  </div>

  <div class="logo">
    <img src="./assets/img/Monitoring Solution (500 × 250 px).svg" alt="">
  </div>
  <div>
    .
  </div>`
}
headerTop();


function winFilial() {
  window.location = "./cadastroFiliais.html"
}

function winTotem() {
  window.location = "./cadastroTotem.html"
}

function winFuncionario() {
  window.location = "./cadastroFuncionario.html"
}
function winInicio() {
  window.location = "./paginaInicial.html"
}
function winSair() {
  window.location = "./index.html"
}

function winSuporte(){
    window.open("https://infinitySolutions.auvo.com.br");  
}
