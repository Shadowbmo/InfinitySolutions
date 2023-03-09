// Header Header Header Header Header Header Header Header Header Header Header Header

function header() {
    bodyzinho.innerHTML = `
    
<!-- Div container do grafico e da navegação -->
<div class="containerGrafico">

    <!-- Div que contem a parte de navegação (parte verde do menu)-->
    <div class="navegacao">
        <ul>
            <li>
                <!-- Foto De Perfil do USUARIO e o NOME do mesmo -->
                <div class="fotoDePerfil">
                    <a href="#">

                        <!-- imagem do ICONE DA FOTO DE PERFIL-->
                        <span class="icone"><i class="uil uil-user"></i> </span>
                        <span class="titulo"><span id="b_usuario">usuário</span></span>

                    </a>
                </div>
            </li>
            <li>
                <a href="#">

                    <!-- Imagem do ICONE DO GRAFICO-->
                    <span class="icone"> <i class="uil uil-home"></i> </span>
                    <span class="titulo"> Início </span>

                </a>
            </li>
            <li onclick="Adicionar()" id="adicionar2">
                <a href="#">

                    <!--Imagem do ICONE DE ADICIONAR -->
                    <span class="icone"> <i class="uil uil-plus"></i> </span>
                    <span class="titulo"> Adicionar</span>
                    <span class="icone2"><i class="uil uil-angle-down"></i></span>

                </a>
            </li>
            <div class="adicionar" id="adicionar3">

                <li>
                    <a href="#">

                        <!--Imagem do ICONE DE ADICIONAR -->
                        <span class="icone"> <i class="uil uil-estate"></i> </span>
                        <span class="titulo"> Adicionar Armazem</span>
                    </a>
                </li>
                <li>
                    <a href="./cadastro_empresa.html">

                        <!--Imagem do ICONE DE ADICIONAR -->
                        <span class="icone"> <i class="uil uil-building"></i></span>
                        <span class="titulo"> Adicionar Empresa</span>

                    </a>
                </li>
                <li>
                    <a href="./cadastro_funcionario.html">

                        <!--Imagem do ICONE DE ADICIONAR -->
                        <span class="icone"> <i class="uil uil-user-plus"></i> </span>
                        <span class="titulo"> Adicionar Responsável</span>

                    </a>
                </li>
            </div>
            <li>
                <a href="./configuracoes.html">

                    <!-- Imagem do ICONE DE CONFIGURAÇÕES -->
                    <span class="icone"><i class="uil uil-cog"></i></span>
                    <span class="titulo"> Configurações</span>

                </a>
            </li>
            <li>
                <a href="#">

                    <!-- Imagem do ICONE DE SUPORTE -->
                    <span class="icone"><i class="uil uil-comment-question"></i>
                    </span>
                    <span class="titulo"> Suporte</span>

                </a>
            </li>
            <li>
                <a href="#" class="Modo" onclick="ModoClaro()">

                    <!-- Dark Mode -->
                    <span class="icone"><i class="uil uil-moon"></i> </span>
                    <span id="ModoEscuro" class="Modo"> Modo Escuro </span>

                </a>
            </li>
            <li>
                <a href="./index.html">

                    <!-- Botão de Sair  -->
                    <span class="icone"><i class="uil uil-signout"></i> </span>
                    <span class="titulo"> Sair </span>

                </a>
            </li>

        </ul>
    </div>
</div>`
}

header();



// <!-- MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU MENU  -->


//deixar o menu toggle 
let toggle = document.querySelector('.toggle');
let navegacao = document.querySelector('.navegacao');
let menu = document.querySelector('.menu');


//Criando a função para quando clicar ativar e desativar
toggle.onclick = function () {
    navegacao.classList.toggle('ativar');
    menu.classList.toggle('ativar');
}
navegacao.classList.toggle('ativar');
menu.classList.toggle('ativar');


// <!-- MODO ESCURO  MODO ESCURO  MODO ESCURO  MODO ESCURO  MODO ESCURO  MODO ESCURO  MODO ESCURO -->


var clique = 1;


// Mudando a frase ao clicar 
function ModoClaro() {
    if (clique >= 13) {
        clique = 0;
    }
    if (clique % 2 == 1) {
        ModoEscuro.innerHTML = 'Modo Claro'
        clique += 1;

    } else {
        ModoEscuro.innerHTML = 'Modo Escuro'
        clique += 1;
    }
}

// 


const body = document.querySelector("body");
const modoEscuro = body.querySelector(".Modo");

modoEscuro.addEventListener("click", () => {
    body.classList.toggle("Escuro");
});


// <-- Botao adicionar Botao adicionar Botao adicionar Botao adicionar botao adicinar -->


var adicionar = 0;
function Adicionar() {
    if (adicionar == 0) {
        adicionar3.classList = 'adicionar4'
        adicionar++;
        adicionar2.innerHTML = `                   
             <a href="#" >

<!--Imagem do ICONE DE ADICIONAR -->
<span class="icone"> <i class="uil uil-plus"></i> </span>
<span class="titulo"> Adicionar</span>
<span class="icone2"><i class="uil uil-angle-up"></i></span>

</a>`

    } else {
        adicionar3.classList = 'adicionar'
        adicionar = 0

        adicionar2.innerHTML = `                   
             <a href="#" >

<!--Imagem do ICONE DE ADICIONAR -->
<span class="icone"> <i class="uil uil-plus"></i> </span>
<span class="titulo"> Adicionar</span>
<span class="icone2"><i class="uil uil-angle-down"></i></span>

</a>`
    }
}


