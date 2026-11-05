// VerPet.js
document.addEventListener("DOMContentLoaded", function () {
    // 1. Carrega os dados atualizados
    const listaPets = obterPets();

    // 2. Obtém o ID enviado pela URL (ex: VerPet.html?id=1234984501)
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    // 3. Localiza o pet no array
    const pet = listaPets.find(item => item.id === id);

    if (!pet) {
        alert("Pet não encontrado.");
        window.location.href = "Pets.html";
        return;
    }

    // 4. Preenche as informações na tabela usando textContent (elementos <td>)
    if (document.querySelector("#viewId")) document.querySelector("#viewId").textContent = pet.id;
    if (document.querySelector("#viewNome")) document.querySelector("#viewNome").textContent = pet.nome;
    if (document.querySelector("#viewTipo")) document.querySelector("#viewTipo").textContent = pet.tipo;
    if (document.querySelector("#viewRaca")) document.querySelector("#viewRaca").textContent = pet.raca;
    if (document.querySelector("#viewProprietario")) document.querySelector("#viewProprietario").textContent = pet.proprietario || "Não informado";

    // 5. Configura o botão Editar para direcionar para a tela de edição com o ID correto
    const btnEditar = document.querySelector("#btnEditarPet");
    if (btnEditar) {
        btnEditar.href = `EditarPet.html?id=${pet.id}`;
    }

    // 6. Funcionalidade do botão Deletar
    const btnDeletar = document.querySelector("#btnDeletarPet");
    if (btnDeletar) {
        btnDeletar.addEventListener("click", function () {
            if (confirm(`Tem certeza que deseja deletar o pet ${pet.nome}?`)) {
                // Filtra o array removendo o pet atual
                const petsAtualizados = listaPets.filter(item => item.id !== pet.id);
                
                // Atualiza o localStorage
                localStorage.setItem("pets", JSON.stringify(petsAtualizados));

                alert("Pet deletado com sucesso!");
                window.location.href = "Pets.html";
            }
        });
    }
});