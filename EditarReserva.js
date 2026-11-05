// EditarReserva.js
document.addEventListener("DOMContentLoaded", function () {

    // 1. Obter todas as reservas atualizadas do localStorage
    const reservas = obterReservas();

    // 2. Pegar o ID da URL (?id=...)
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    // 3. Buscar o índice do objeto no array
    const indice = reservas.findIndex(item => item.id === id);

    if (indice === -1) {
        alert("Reserva não encontrada.");
        window.location.href = "Reserva.html";
        return;
    }

    const reserva = reservas[indice];

    // 4. Carregar os dados atuais nos campos da tela
    if (document.querySelector("#idReserva")) document.querySelector("#idReserva").value = reserva.id;
    if (document.querySelector("#proprietario")) document.querySelector("#proprietario").value = reserva.proprietario;
    if (document.querySelector("#nomePet")) document.querySelector("#nomePet").value = reserva.nomePet;
    if (document.querySelector("#chegada")) document.querySelector("#chegada").value = reserva.chegada;
    if (document.querySelector("#partida")) document.querySelector("#partida").value = reserva.partida;
    if (document.querySelector("#notas")) document.querySelector("#notas").value = reserva.notas;
    if (document.querySelector("#status")) document.querySelector("#status").value = reserva.status;

    // 5. Salvar as alterações no localStorage ao submeter o formulário
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o envio nativo do formulário

            // Atualiza os dados no objeto dentro do array 'reservas'
            reservas[indice].proprietario = document.querySelector("#proprietario").value;
            reservas[indice].nomePet = document.querySelector("#nomePet").value;
            reservas[indice].chegada = document.querySelector("#chegada").value;
            reservas[indice].partida = document.querySelector("#partida").value;
            reservas[indice].notas = document.querySelector("#notas").value;
            reservas[indice].status = document.querySelector("#status").value;
            reservas[indice].atualizadoEm = new Date().toLocaleDateString("pt-BR");

            // PERSISTÊNCIA: Grava a lista alterada no navegador!
            localStorage.setItem("reservas", JSON.stringify(reservas));

            alert("Reserva atualizada com sucesso!");
            
            // Redireciona para a lista
            window.location.href = "Reserva.html";
        });
    }

    // 6. Botão Voltar
    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Reserva.html";
        });
    }
});