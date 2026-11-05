// CadastrarReserva.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formCadastrarReserva") || document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Impede o recarregamento nativo da página

            // 1. Obtém as reservas atuais salvas no localStorage (via dados.js)
            const listaReservas = obterReservas();

            // 2. Coleta os valores preenchidos no formulário
            const proprietario = document.querySelector("#proprietarioReserva").value;
            const nomePet = document.querySelector("#nomePetReserva").value;
            const chegada = document.querySelector("#chegadaReserva").value;
            const partida = document.querySelector("#partidaReserva").value;
            const notas = document.querySelector("#notasReserva") ? document.querySelector("#notasReserva").value : "";
            const total = document.querySelector("#totalReserva") ? document.querySelector("#totalReserva").value : "R$ 40,00";

            // 3. Gera um ID numérico único de 10 dígitos baseado no timestamp
            const novoId = String(Date.now()).slice(-10);

            // 4. Formata a data de criação no formato pt-BR
            const hoje = new Date().toLocaleDateString("pt-BR");

            // 5. Constrói o novo objeto de reserva com o status inicial 'Reservada'
            const novaReserva = {
                id: novoId,
                proprietario: proprietario,
                nomePet: nomePet,
                chegada: chegada,
                partida: partida,
                notas: notas,
                anotacoes: "",
                status: "Reservada",
                total: total,
                criadoEm: hoje,
                atualizadoEm: hoje
            };

            // 6. Adiciona a nova reserva à lista e atualiza o localStorage
            listaReservas.push(novaReserva);
            localStorage.setItem("reservas", JSON.stringify(listaReservas));

            alert("Reserva criada com sucesso!");

            // 7. Redireciona para a listagem de reservas (Reserva.html)
            window.location.href = "Reserva.html";
        });
    }

    // Botão Voltar
    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Reserva.html";
        });
    }
});