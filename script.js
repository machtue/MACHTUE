


const btnEditar = document.getElementById('entrar');
const btnSair = document.getElementById('sair');
const nomeElemento = document.getElementById('nome-usuario');
const linkCidade = document.getElementById('link-cidade');

btnEditar.addEventListener("click", function() {
     const novoNome = prompt("Digite seu nome:", nomeElemento.textContent);
    if (novoNome !== null && novoNome.trim() !== "") {
        nomeElemento.textContent = novoNome.trim();
    }

    const novaCidade = prompt("Digite sua cidade:", linkCidade.textContent);
    if (novaCidade !== null && novaCidade.trim() !== "") {
        linkCidade.textContent = novaCidade.trim();
    }
});
linkCidade.addEventListener("click", function(event) {
    event.preventDefault();
    const novaCidade = prompt("Digite sua cidade:", linkCidade.textContent);
    if (novaCidade !== null && novaCidade.trim() !== "") {
        linkCidade.textContent = novaCidade.trim();
    }
});

btnSair.addEventListener("click", function() {  
    const resposta = confirm("Deseja sair do perfil?");
    if (resposta) {
        alert("Você saiu do perfil!");
        nomeElemento.textContent = "Samuel Machtue";
        linkCidade.textContent = "Goiânia - GO";
    }
});