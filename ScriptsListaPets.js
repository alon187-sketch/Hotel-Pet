// scriptListaPets.js
document.addEventListener("DOMContentLoaded", function () {
    renderizarTabelaPets();
});

function renderizarTabelaPets() {
    const tbody = document.querySelector("#tabelaPetsBody");
    if (!tbody) return;

    // Sempre busca a lista atualizada (recriando o localStorage se necessário)
    const listaPets = obterPets();

    tbody.innerHTML = ""; // Limpa a tabela

    listaPets.forEach(pet => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td><input type="checkbox"></td>
            <td>${pet.id}</td>
            <td>${pet.nome}</td>
            <td>${pet.tipo}</td>
            <td>${pet.raca}</td>
            <td>${pet.tamanho}</td>
            <td>
                <a href="EditarPet.html?id=${pet.id}">Editar</a>
                <a href="VerPet.html?id=${pet.id}">Visualizar</a>
            </td>
        `;

        tbody.appendChild(tr);
    });
}