
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("header a");
    const paginaAtual = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    // Destaca a página atual no menu
    links.forEach((link) => {
        const destino = link.getAttribute("href");

        if (destino && destino.toLowerCase() === paginaAtual) {
            link.style.backgroundColor = "#007bff";
            link.style.color = "white";
            link.setAttribute("aria-current", "page");
        }
    });

    document.querySelectorAll('button[type="reset"]').forEach((botao) => {
        botao.addEventListener("click", (evento) => {
            const formulario = botao.closest("form");

            if (formulario && !confirm("Deseja limpar todos os campos?")) {
                evento.preventDefault();
            }
        });
    });

    document.querySelectorAll("form").forEach((formulario) => {
        let alterado = false;

        formulario.addEventListener("input", () => {
            alterado = true;
        });

        formulario.addEventListener("change", () => {
            alterado = true;
        });

        formulario.addEventListener("submit", () => {
            alterado = false;
        });

        window.addEventListener("beforeunload", (evento) => {
            if (alterado) {
                evento.preventDefault();
                evento.returnValue = "";
            }
        });

        formulario.addEventListener("reset", () => {
            alterado = false;
        });
    });

    const voltar = document.querySelector('[data-navegacao="voltar"]');

    if (voltar) {
        voltar.addEventListener("click", () => {
            if (window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = "Pets.html";
            }
        });
    }
});

// Função para sair da sessão
  function sair() {
    if (!confirm("Deseja realmente sair?")) {
        return;
    }

    sessionStorage.removeItem('usuarioLogado');

    window.location.href = 'Login.html';
}


//Login do nome do usuario

document.addEventListener("DOMContentLoaded", function () {

    // Limpar os campos ao abrir a página de login
    if (window.location.pathname.toLowerCase().endsWith("login.html")) {
        document.querySelector("#usuario").value = "";
        document.querySelector("#senha").value = "";
    }

// Carregar o cabeçalho nas páginas

    const elementoCabecalho = document.querySelector("#cabecalho");

    if (elementoCabecalho) {

        fetch("cabecalho.html")
            .then(resposta => resposta.text())
            .then(html => {

                elementoCabecalho.innerHTML = html;

                // Recuperar o nome do usuário logado
                const nomeUsuario = document.querySelector("#nomeUsuario");
                const dadosUsuario = sessionStorage.getItem("usuarioLogado");

                if (dadosUsuario === null) {
                    window.location.href = "Login.html";
                } else {
                    const usuario = JSON.parse(dadosUsuario);
                    nomeUsuario.textContent = usuario.nome;
                }

            })
            .catch(erro => {
                console.error("Erro ao carregar o cabeçalho:", erro);
            });
    }

});


    // Chamar a navegação
    fetch('Navegacao.html')
    .then(resposta => resposta.text())
    .then(html => {
        document.getElementById('Navegacao').innerHTML = html;
    })
    .catch(erro => {
        console.error('Erro ao carregar a Navegação:', erro);
    });
