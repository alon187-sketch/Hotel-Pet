
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