// VerReserva.js
document.addEventListener("DOMContentLoaded", function () {
    // 1. Obtém as reservas do localStorage
    const reservas = obterReservas();

    // 2. Captura o ID passado na URL (?id=...)
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    // 3. Busca a reserva convertendo ambos os IDs para String (evita incompatibilidade de tipo)
    const reserva = reservas.find(item => String(item.id) === String(id));

    if (!reserva) {
        alert("Reserva não encontrada.");
        window.location.href = "Reserva.html";
        return;
    }

    // 4. Preenche os campos na tela usando textContent
    if (document.querySelector("#viewId")) document.querySelector("#viewId").textContent = reserva.id;
    if (document.querySelector("#viewProprietario")) document.querySelector("#viewProprietario").textContent = reserva.proprietario || "Não informado";
    if (document.querySelector("#viewNomePet")) document.querySelector("#viewNomePet").textContent = reserva.nomePet;
    if (document.querySelector("#viewChegada")) document.querySelector("#viewChegada").textContent = reserva.chegada;
    if (document.querySelector("#viewPartida")) document.querySelector("#viewPartida").textContent = reserva.partida;
    if (document.querySelector("#viewStatus")) document.querySelector("#viewStatus").textContent = reserva.status;
    if (document.querySelector("#viewTotal")) document.querySelector("#viewTotal").textContent = reserva.total || "R$ 40,00";
    if (document.querySelector("#viewNotas")) document.querySelector("#viewNotas").textContent = reserva.notas || "Sem observações.";

    // 5. Configura o botão Editar para abrir a tela de edição correta
    const btnEditar = document.querySelector("#btnEditarReserva");
    if (btnEditar) {
        btnEditar.addEventListener("click", function (e) {
            e.preventDefault();
            // Utiliza a função editarReserva definida no scriptLista.js se disponível, ou faz o redirecionamento direto
            if (typeof editarReserva === "function") {
                editarReserva(reserva.id, reserva.status);
            } else {
                window.location.href = `EditarReserva.html?id=${reserva.id}`;
            }
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