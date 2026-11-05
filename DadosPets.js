// dadosPets.js
const petsIniciais = [
    {
        id: "1234984501",
        nome: "Max",
        tipo: "Cachorro",
        raca: "Pastor Alemão",
        tamanho: "Grande"
    },
    {
        id: "1234984502",
        nome: "Ginger",
        tipo: "Gato",
        raca: "Não definida",
        tamanho: "Pequeno"
    }
];

function obterPets() {
    let petsSalvos = localStorage.getItem("pets");

    // Se o localStorage foi limpo, re-inicializa com os dados padrão
    if (!petsSalvos || petsSalvos === "undefined" || petsSalvos === "null") {
        localStorage.setItem("pets", JSON.stringify(petsIniciais));
        return petsIniciais;
    }

    return JSON.parse(petsSalvos);
}

// Garante que a variável global 'pets' é sempre preenchida corretamente
let pets = obterPets();