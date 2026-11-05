// EditarPet.js
document.addEventListener("DOMContentLoaded", function () {

    // 1. Carrega os dados atualizados
    const listaPets = obterPets();

    // 2. Obtém o ID vindo da URL (ex: EditarPet.html?id=1234984501)
    const parametros = new URLSearchParams(window.location.search);
    const id = parametros.get("id");

    // 3. Localiza o pet no array
    const indice = listaPets.findIndex(item => item.id === id);

    if (indice === -1) {
        alert("Pet não encontrado.");
        window.location.href = "Pets.html";
        return;
    }

    const pet = listaPets[indice];

    // 4. Preenche os campos do formulário com os valores atuais
    if (document.querySelector("#idPet")) document.querySelector("#idPet").value = pet.id;
    if (document.querySelector("#nomePet")) document.querySelector("#nomePet").value = pet.nome;
    if (document.querySelector("#tipoPet")) document.querySelector("#tipoPet").value = pet.tipo;
    if (document.querySelector("#racaPet")) document.querySelector("#racaPet").value = pet.raca;
    if (document.querySelector("#tamanhoPet")) document.querySelector("#tamanhoPet").value = pet.tamanho;

    // 5. Salva as alterações ao clicar em Salvar
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita recarregar a página sem salvar

            // Atualiza os dados do objeto no array
            listaPets[indice].nome = document.querySelector("#nomePet").value;
            listaPets[indice].tipo = document.querySelector("#tipoPet").value;
            listaPets[indice].raca = document.querySelector("#racaPet").value;
            listaPets[indice].tamanho = document.querySelector("#tamanhoPet").value;

            // Persiste no localStorage
            localStorage.setItem("pets", JSON.stringify(listaPets));

            alert("Pet atualizado com sucesso!");

            // Retorna para a listagem
            window.location.href = "Pets.html";
        });
    }

    // 6. Botão Voltar
    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Pets.html";
        });
    }
});