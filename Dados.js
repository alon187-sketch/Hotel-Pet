// dados.js

const dadosIniciais = [
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
    }
];

// Função responsável por garantir que SEMPRE existam dados
function obterReservas() {
    let reservasSalvas = localStorage.getItem("reservas");

    // Se o localStorage foi limpo ou não existe, recria com os dados iniciais
    if (!reservasSalvas || reservasSalvas === "undefined" || reservasSalvas === "null") {
        localStorage.setItem("reservas", JSON.stringify(dadosIniciais));
        return dadosIniciais;
    }

    return JSON.parse(reservasSalvas);
}

// Garante que a variável global 'reservas' também esteja sempre sincronizada
let reservas = obterReservas();