function gerarCorAleatoria() {
  return `rgb(${Math.random() * 256}, ${Math.random() * 256}, ${
    Math.random() * 256
  })`;
}

function aplicarCores() {
  const raiz = document.documentElement;

  const novaPrincipal = gerarCorAleatoria();
  const novaSecundaria = gerarCorAleatoria();
  const novaBrilho = gerarCorAleatoria();

  raiz.style.setProperty("--cor_principal", novaPrincipal);
  raiz.style.setProperty("--cor_secundaria", novaSecundaria);
  raiz.style.setProperty("--cor_brilho", novaBrilho);

  raiz.style.setProperty("--cor_fonte", "#ffffff");

  console.log("-------------------------------------");
  console.log("Cor principal: " + novaPrincipal);
  console.log("Cor secundária: " + novaSecundaria);
  console.log("Cor brilho: " + novaBrilho);
  console.log("-------------------------------------");
}

const botao = document.querySelector(".button");
botao.addEventListener("click", aplicarCores);
