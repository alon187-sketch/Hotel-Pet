document.addEventListener("DOMContentLoaded", function () {

    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    const reserva = reservas.find(item => item.id === id);

    if (!reserva) {
        alert("Reserva não encontrada.");
        window.location.href = "Reserva.html";
        return;
    }

    document.querySelector("#idReserva").value = reserva.id;
    document.querySelector("#proprietario").value = reserva.proprietario;
    document.querySelector("#nomePet").value = reserva.nomePet;
    document.querySelector("#chegada").value = reserva.chegada;
    document.querySelector("#partida").value = reserva.partida;
    document.querySelector("#notas").value = reserva.notas;
    document.querySelector("#anotacoes").value = reserva.anotacoes;
    document.querySelector("#status").value = reserva.status;
    document.querySelector("#total").value = reserva.total;

});