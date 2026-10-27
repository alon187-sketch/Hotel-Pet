
document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.querySelector("form");

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const usuario = document.querySelector("#usuario").value;
        const senha = document.querySelector("#senha").value;

        if (usuario === "" || senha === "") {
            alert("Preencha o usuário e a senha!");
            return;
        }

        const USUARIO_LOGADO = {
            nome: usuario
        };

        sessionStorage.setItem(
            "usuarioLogado",
            JSON.stringify(USUARIO_LOGADO)
        );

        window.location.href = "Reserva.html";
    });

});
