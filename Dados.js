// dados.js
const dadosIniciais = [
    {
        id: "1234984501",
        proprietario: "João da Silva",
        nomePet: "Max",
        chegada: "2026-05-02",
        partida: "2026-05-07",
        notas: "Ração especial",
        anotacoes: "Pet tranquilo",
        status: "Reservada",
        total: "R$ 40,00",
        criadoEm: "02/05/2026",
        atualizadoEm: "07/05/2026"
    },
    {
        id: "1234984502",
        proprietario: "Maria da Silva",
        nomePet: "Ginger",
        chegada: "2026-05-02",
        partida: "2026-05-07",
        notas: "Pet Agitado.",
        anotacoes: "Ração especial.",
        status: "Em progresso",
        total: "R$ 40,00",
        criadoEm: "02/05/2026",
        atualizadoEm: "07/05/2026"
    },
    {
        id: "1234984503",
        proprietario: "João da Silva",
        nomePet: "Max",
        chegada: "2026-05-02",
        partida: "2026-05-07",
        notas: "Gosta de morder.",
        anotacoes: "Pet agitado.",
        status: "Finalizada",
        total: "R$ 40,00",
        criadoEm: "02/05/2026",
        atualizadoEm: "07/05/2026"
    }
];

function obterReservas() {
    let reservasSalvas = localStorage.getItem("reservas");

    if (!reservasSalvas || reservasSalvas === "undefined" || reservasSalvas === "null") {
        localStorage.setItem("reservas", JSON.stringify(dadosIniciais));
        return dadosIniciais;
    }

    return JSON.parse(reservasSalvas);
}

let reservas = obterReservas();