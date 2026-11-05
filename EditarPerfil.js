// EditarPerfil.js
document.addEventListener("DOMContentLoaded", function () {
    const listaUsuarios = obterUsuarios();

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    const indice = listaUsuarios.findIndex(item => String(item.id) === String(id));

    if (indice === -1) {
        alert("Usuário não encontrado.");
        window.location.href = "Usuarios.html";
        return;
    }

    const usuario = listaUsuarios[indice];

    // Preenche os campos do formulário
    if (document.querySelector("#idUsuario")) document.querySelector("#idUsuario").value = usuario.id;
    if (document.querySelector("#email")) document.querySelector("#email").value = usuario.email;
    if (document.querySelector("#nome")) document.querySelector("#nome").value = usuario.nome;
    if (document.querySelector("#sobrenome")) document.querySelector("#sobrenome").value = usuario.sobrenome || "";
    if (document.querySelector("#telefone")) document.querySelector("#telefone").value = usuario.telefone || "";
    if (document.querySelector("#funcao")) document.querySelector("#funcao").value = usuario.funcao;

    // Submissão do formulário
    const form = document.querySelector("#formEditarPerfil") || document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            listaUsuarios[indice].email = document.querySelector("#email").value;
            listaUsuarios[indice].nome = document.querySelector("#nome").value;
            listaUsuarios[indice].sobrenome = document.querySelector("#sobrenome").value;
            listaUsuarios[indice].telefone = document.querySelector("#telefone").value;
            listaUsuarios[indice].funcao = document.querySelector("#funcao").value;

            // Salva a lista atualizada
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

            alert("Perfil do usuário atualizado com sucesso!");
            window.location.href = "Usuarios.html";
        });
    }

    // Botão Voltar
    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Usuarios.html";
        });
    }
});