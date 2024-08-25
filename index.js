// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém todos os botões que devem abrir o modal
var buttons = document.querySelectorAll(".btn-dsp");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Adiciona um ouvinte de evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Exibe o modal
        modal.style.display = "block";

        // Oculta a div do carro que contém o botão clicado
        this.parentElement.style.display = "none";
    });
});

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Obtém o botão "Carros Não Disponíveis"
var carroNaoDspButton = document.getElementById("carro-nao-dsp");

// Adiciona um ouvinte de evento de clique ao botão
carroNaoDspButton.addEventListener("click", function() {
    // Redireciona para a página "carro-nao-dsp.html"
    window.location.href = "carro-nao-dsp.html";
});

// Obtém todos os botões "Pegar Carro"
var buttons = document.querySelectorAll(".btn-dsp");

// Adiciona um ouvinte de evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Obtém o identificador do carro a partir do atributo data-carro
        var carroId = this.getAttribute("data-carro");

        // Armazena o identificador do carro no localStorage
        localStorage.setItem("carroSelecionado", carroId);

    });
});

