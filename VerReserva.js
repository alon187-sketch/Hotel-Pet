// Dados das reservas

const reservas = [
    {
        id: "1234984501",
        proprietario: "João da Silva",
        nomePet: "Max",
        chegada: "2021-05-02",
        partida: "2021-05-07",
        notas: "Ração especial",
        anotacoes: "Pet tranquilo",
        status: "Reservada",
        total: "R$ 40,00",
        criadoEm: "02/05/2021",
        atualizadoEm: "07/05/2021"
    },

    {
        id: "1234984502",
        proprietario: "Maria da Silva",
        nomePet: "Ginger",
        chegada: "2021-05-02",
        partida: "2020-05-07",
        notas: "Pet Agitado.",
        anotacoes: "Ração especial.",
        status: "Em progresso",
        total: "R$ 40,00",
        criadoEm: "02/05/2021",
        atualizadoEm: "07/05/2021"
    },

        {
        id: "1234984503",
        proprietario: "João da Silva",
        nomePet: "Max",
        chegada: "2021-05-02",
        partida: "2021-05-07",
        notas: "Gosta de morder.",
        anotacoes: "Pet agitado.",
        status: "Finalizada",
        total: "R$ 40,00",
        criadoEm: "02/05/2021",
        atualizadoEm: "07/05/2021"
    },
];

document.addEventListener("DOMContentLoaded", function () {



        // Recuperar o ID enviado pelo link
        const parametros = new URLSearchParams(window.location.search);
        const id = parametros.get("id");

        // Encontrar a reserva correspondente
        const reserva = reservas.find(item => item.id === id);

            if (!reserva) {
                alert("Reserva não encontrada.");
                window.location.href = "Reserva.html";
                return;
            }

            document.querySelector("#idReserva").textContent = reserva.id;
            document.querySelector("#proprietario").textContent = reserva.proprietario;
            document.querySelector("#nomePet").textContent = reserva.nomePet;
            document.querySelector("#chegada").textContent = reserva.chegada;
            document.querySelector("#partida").textContent = reserva.partida;
            document.querySelector("#notas").textContent = reserva.notas;
            document.querySelector("#anotacoes").textContent = reserva.anotacoes;
            document.querySelector("#status").textContent = reserva.status;
            document.querySelector("#total").textContent = reserva.total;
            document.querySelector("#criadoEm").textContent = reserva.criadoEm;
            document.querySelector("#atualizadoEm").textContent = reserva.atualizadoEm;


});