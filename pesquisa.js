
function pesquisarTabela() {
  const tabela = document.querySelector('table');

  if (!tabela) {
    alert('Tabela não encontrada.');
    return;
  }

  const campos = document.querySelectorAll(
    'main input:not([type="button"]):not([type="submit"]):not([type="checkbox"]), main select'
  );

  const filtros = Array.from(campos)
    .map(campo => campo.value.trim().toLowerCase())
    .filter(valor => valor !== '' && valor !== 'todos');

  const linhas = tabela.querySelectorAll('tbody tr');

  linhas.forEach(linha => {
    const texto = linha.textContent.toLowerCase();

    const corresponde = filtros.every(filtro =>
      texto.includes(filtro)
    );

    linha.style.display = corresponde ? '' : 'none';
  });

    document.querySelectorAll('form').forEach(form => {
    form.addEventListener('reset', function() {
        setTimeout(() => {
        document.querySelectorAll('table tbody tr').forEach(linha => {
            linha.style.display = '';
        });
        }, 0);
    });
});

}


