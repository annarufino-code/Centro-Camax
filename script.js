let temporizadorBusca;

function verificarBoxExistent(numero) {
  const loader = document.getElementById('loader-box');
  const status = document.getElementById('status-box');

  status.textContent = '';
  if (!numero.trim()) {
    loader.classList.add('hidden');
    return;
  }

  // Exibe o símbolo de carregamento
  loader.classList.remove('hidden');

  clearTimeout(temporizadorBusca);

  // Simula a verificação do box na feira
  temporizadorBusca = setTimeout(() => {
    loader.classList.add('hidden');

    if (numero.length >= 2) {
      status.textContent = '✓';
      status.style.color = 'green';
    } else {
      status.textContent = '✕';
      status.style.color = 'red';
    }
  }, 1000);
}