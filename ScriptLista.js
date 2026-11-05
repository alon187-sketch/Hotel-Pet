// scriptLista.js
document.addEventListener("DOMContentLoaded", function () {
    renderizarTabela();
});

function renderizarTabela() {
    const tbody = document.querySelector("#tabelaReservasBody");
    if (!tbody) return;

    // Obtém as reservas atualizadas do localStorage
    const reservas = obterReservas();

    tbody.innerHTML = ""; // Limpa a tabela

    reservas.forEach(reserva => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${reserva.id}</td>
            <td>${reserva.nomePet}</td>
            <td>${reserva.chegada}</td>
            <td>${reserva.partida}</td>
            <td>${reserva.status}</td>
            <td>${reserva.total}</td>
            <td>
                <a href="#" onclick="editarReserva('${reserva.id}', '${reserva.status}'); return false;">Editar</a>
                <a href="VerReserva.html?id=${reserva.id}">Visualizar</a>
            </td>
        `;

        tbody.appendChild(tr);
    });
}

function editarReserva(id, status) {
    if (status === "Reservada") {
        window.location.href = "EditarReserva.html?id=" + id;
    } else if (status === "Em progresso") {
        window.location.href = "EditarReservaAndamento.html?id=" + id;
    } else if (status === "Finalizada") {
        window.location.href = "EditarReservaFinalizada.html?id=" + id;
    } else if (status === "Cancelado") {
        window.location.href = "EditarReserva.html?id=" + id;
    } else {
        alert("Status da reserva inválido.");
    }
}