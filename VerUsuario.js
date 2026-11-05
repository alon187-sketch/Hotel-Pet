// VerUsuario.js
document.addEventListener("DOMContentLoaded", function () {
    const listaUsuarios = obterUsuarios();

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    const usuario = listaUsuarios.find(item => String(item.id) === String(id));

    if (!usuario) {
        alert("Usuário não encontrado.");
        window.location.href = "Usuarios.html";
        return;
    }

    if (document.querySelector("#viewId")) document.querySelector("#viewId").textContent = usuario.id;
    if (document.querySelector("#viewNome")) document.querySelector("#viewNome").textContent = `${usuario.nome} ${usuario.sobrenome || ''}`;
    if (document.querySelector("#viewEmail")) document.querySelector("#viewEmail").textContent = usuario.email;
    if (document.querySelector("#viewTelefone")) document.querySelector("#viewTelefone").textContent = usuario.telefone || "Não informado";
    if (document.querySelector("#viewFuncao")) document.querySelector("#viewFuncao").textContent = usuario.funcao;
    if (document.querySelector("#viewStatus")) document.querySelector("#viewStatus").textContent = usuario.status;

    const btnEditar = document.querySelector("#btnEditarUsuario");
    if (btnEditar) {
        btnEditar.href = `EditarPerfil.html?id=${usuario.id}`;
    }
});