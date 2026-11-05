// scriptLista.js
document.addEventListener("DOMContentLoaded", function () {
    renderizarTabela();
});

function renderizarTabela() {
    const tbody = document.querySelector("#tabelaReservasBody");
    if (!tbody) return;

    const reservas = obterReservas();
    tbody.innerHTML = ""; 

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
    // Normaliza a string do status para ignorar diferenças de maiúsculas/minúsculas
    const st = String(status).trim().toLowerCase();

    if (st === "reservada") {
        window.location.href = "EditarReserva.html?id=" + id;
    } else if (st === "em progresso" || st === "emprogresso") {
        window.location.href = "EditarReservaAndamento.html?id=" + id;
    } else if (st === "finalizada" || st === "concluído") {
        window.location.href = "EditarReservaFinalizada.html?id=" + id;
    } else {
        // Redirecionamento padrão para a tela genérica de edição caso venha um status diferente
        window.location.href = "EditarReserva.html?id=" + id;
    }
}