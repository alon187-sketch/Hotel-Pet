// CadastrarPet.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#formCadastrarPet") || document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // Evita recarregar a página sem salvar

            // 1. Carrega os pets já existentes
            const listaPets = obterPets();

            // 2. Coleta os valores digitados no formulário
            const novoProprietario = document.querySelector("#proprietarioPet").value;
            const novoNome = document.querySelector("#nomePet").value;
            const novoTipo = document.querySelector("#tipoPet").value;
            const novaRaca = document.querySelector("#racaPet").value;
            const novoTamanho = document.querySelector("#tamanhoPet").value;

            // 3. Gera um ID numérico único baseado no momento atual
            const novoId = String(Date.now()).slice(-10);

            // 4. Cria o novo objeto Pet
            const novoPet = {
                id: novoId,
                proprietario: novoProprietario,
                nome: novoNome,
                tipo: novoTipo,
                raca: novaRaca || "Não definida",
                tamanho: novoTamanho
            };

            // 5. Adiciona o novo objeto à lista e salva no localStorage
            listaPets.push(novoPet);
            localStorage.setItem("pets", JSON.stringify(listaPets));

            alert("Pet cadastrado com sucesso!");

            // 6. Redireciona de volta para a lista principal de Pets
            window.location.href = "Pets.html";
        });
    }

    // Botão Voltar
    const btnVoltar = document.querySelector('[data-navegacao="voltar"]');
    if (btnVoltar) {
        btnVoltar.addEventListener("click", function () {
            window.location.href = "Pets.html";
        });
    }
});