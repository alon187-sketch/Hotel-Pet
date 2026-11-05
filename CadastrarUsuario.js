// CadastrarUsuario.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formCadastrarUsuario") || document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio nativo da página

            // 1. Carrega os usuários já existentes do localStorage
            const listaUsuarios = obterUsuarios();

            // 2. Coleta os valores digitados nos campos
            const novoEmail = document.querySelector("#emailUsuario").value;
            const novoNome = document.querySelector("#nomeUsuario").value;
            const novoSobrenome = document.querySelector("#sobrenomeUsuario").value;
            const novoTelefone = document.querySelector("#telefoneUsuario").value;
            const novaFuncao = document.querySelector("#funcaoUsuario").value;

            // 3. Gera um ID único incremental
            const novoId = String(listaUsuarios.length + 1);

            // 4. Formata a data atual (dd/mm/aaaa)
            const hoje = new Date().toLocaleDateString("pt-BR");

            // 5. Cria o objeto do novo usuário
            const novoUsuario = {
                id: novoId,
                email: novoEmail,
                nome: novoNome,
                sobrenome: novoSobrenome,
                telefone: novoTelefone,
                funcao: novaFuncao,
                status: "Ativo", // Define status inicial como Ativo
                criadoEm: hoje,
                foto: "Imagens/usuário.jpg"
            };

            // 6. Insere no array e salva no localStorage
            listaUsuarios.push(novoUsuario);
            localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));

            alert("Usuário cadastrado com sucesso!");

            // 7. Redireciona de volta para a tabela de Usuários
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