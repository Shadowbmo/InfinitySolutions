
function header() {
    headerzinho.innerHTML = `
    <header id="header">
        <nav class="container">
            <a href="./index.html" class="logo">
                <img src="./assets/img/Monitoring_Solution.svg" alt="">
            </a>

            <div class="Registro">
                Login
                register

            </div>

        </nav>
    </header>
    `

    menuzinho.innerHTML = `
    <ul class=" menuLista">
    <!-- Icone para home -->
    <li class="menuItems">
        <a href="#" class="iconesHeader">
            <i class="uil uil-home"></i>
        </a>
    </li>
    <!-- icone para o globo -->
    <li class="menuItems">
        <a href="#" class="iconesHeader">
            <i class="uil uil-globe"></i>
        </a>
    </li>
    <!-- icone para modo claro -->
    <li class="menuItems">
        <a href="#" class="iconesHeader">
            <i class="uil uil-sun"></i>
        </a>
    </li>
    <!-- icone para modo escuro -->
    <li class="menuItems">
        <a href="#" class="iconesHeader">
            <i class="uil uil-moon"></i>
        </a>
    </li>
</ul>
    `

}

header();