// EditarReserva.js
document.addEventListener("DOMContentLoaded", function () {
    const reservas = obterReservas();

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    // Comparação segura garantindo que ambos sejam String
    const indice = reservas.findIndex(item => String(item.id) === String(id));

    if (indice === -1) {
        alert("Reserva não encontrada.");
        window.location.href = "Reserva.html";
        return;
    }

    const reserva = reservas[indice];

    // Carregar dados nos campos
    if (document.querySelector("#idReserva")) document.querySelector("#idReserva").value = reserva.id;
    if (document.querySelector("#proprietario")) document.querySelector("#proprietario").value = reserva.proprietario;
    if (document.querySelector("#nomePet")) document.querySelector("#nomePet").value = reserva.nomePet;
    if (document.querySelector("#chegada")) document.querySelector("#chegada").value = reserva.chegada;
    if (document.querySelector("#partida")) document.querySelector("#partida").value = reserva.partida;
    if (document.querySelector("#notas")) document.querySelector("#notas").value = reserva.notas || "";
    if (document.querySelector("#status")) document.querySelector("#status").value = reserva.status;

    // Salvar alterações
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            reservas[indice].proprietario = document.querySelector("#proprietario").value;
            reservas[indice].nomePet = document.querySelector("#nomePet").value;
            reservas[indice].chegada = document.querySelector("#chegada").value;
            reservas[indice].partida = document.querySelector("#partida").value;
            if (document.querySelector("#notas")) reservas[indice].notas = document.querySelector("#notas").value;
            if (document.querySelector("#status")) reservas[indice].status = document.querySelector("#status").value;
            reservas[indice].atualizadoEm = new Date().toLocaleDateString("pt-BR");

            localStorage.setItem("reservas", JSON.stringify(reservas));

            alert("Reserva atualizada com sucesso!");
            window.location.href = "Reserva.html";
        });
    }

    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Reserva.html";
        });
    }
});