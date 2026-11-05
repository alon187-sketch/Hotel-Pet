// dadosUsuarios.js
const usuariosIniciais = [
    {
        id: "1",
        email: "Joaodasilva@pet.com",
        nome: "João",
        sobrenome: "da Silva",
        telefone: "11999998888",
        funcao: "Gerente",
        status: "Ativo",
        criadoEm: "19/02/2020",
        foto: "Imagens/usuário.jpg"
    },
    {
        id: "2",
        email: "maria@pet.com",
        nome: "Maria",
        sobrenome: "da Silva",
        telefone: "11977776666",
        funcao: "Funcionário",
        status: "Inativo",
        criadoEm: "19/03/2020",
        foto: "Imagens/usuário.jpg"
    },
    {
        id: "3",
        email: "josedasilva@pet.com",
        nome: "José",
        sobrenome: "da Silva",
        telefone: "11955554444",
        funcao: "Cliente",
        status: "Ativo",
        criadoEm: "19/02/2020",
        foto: "Imagens/usuário.jpg"
    }
];

function obterUsuarios() {
    let usuariosSalvos = localStorage.getItem("usuarios");

    if (!usuariosSalvos || usuariosSalvos === "undefined" || usuariosSalvos === "null") {
        localStorage.setItem("usuarios", JSON.stringify(usuariosIniciais));
        return usuariosIniciais;
    }

    return JSON.parse(usuariosSalvos);
}

let usuarios = obterUsuarios();