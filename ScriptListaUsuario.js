// scriptListaUsuarios.js
document.addEventListener("DOMContentLoaded", function () {
    renderizarTabelaUsuarios();
});

function renderizarTabelaUsuarios() {
    const tbody = document.querySelector("#tabelaUsuariosBody");
    if (!tbody) return;

    const listaUsuarios = obterUsuarios();

    tbody.innerHTML = "";

    listaUsuarios.forEach(u => {
        const tr = document.createElement("tr");

        const classeStatus = String(u.status).toLowerCase() === "ativo" ? "status ativo" : "status inativo";
        const nomeCompleto = `${u.nome} ${u.sobrenome || ""}`.trim();

        tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>
                <img src="${u.foto || 'Imagens/usuário.jpg'}" height="50" width="50" alt="Imagem do usuário">
            </td>
            <td>${u.email}</td>
            <td>${nomeCompleto}</td>
            <td>${u.funcao}</td>
            <td>
                <span class="${classeStatus}">${u.status}</span>
            </td>
            <td>${u.criadoEm}</td>
            <td>
                <a href="EditarPerfil.html?id=${u.id}">Editar</a>
                <a href="VerUsuario.html?id=${u.id}">Visualizar</a>
            </td>
        `;

        tbody.appendChild(tr);
    });
}