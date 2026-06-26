const depoimentos = [
  {
    nome: "Carlos Silva",
    texto: "Excelente atendimento. Minha residência ficou totalmente automatizada."
  },
  {
    nome: "Mariana Souza",
    texto: "Projeto impecável. Recomendo para quem busca conforto e tecnologia."
  },
  {
    nome: "Roberto Lima",
    texto: "Instalação rápida, organizada e suporte excelente."
  }
];

let indice = 0;

// --- DEPOIMENTOS ---
function trocarDepoimento() {
  const textoDepoimento = document.getElementById("texto-depoimento");
  const nomeCliente = document.getElementById("nome-cliente");

  // Só executa se os elementos existirem no HTML
  if (!textoDepoimento || !nomeCliente) return;

  textoDepoimento.textContent = depoimentos[indice].texto;
  nomeCliente.textContent = depoimentos[indice].nome;

  indice++;

  if (indice >= depoimentos.length) {
    indice = 0;
  }
}

// Só ativa os depoimentos se a seção existir
if (document.getElementById("texto-depoimento") && document.getElementById("nome-cliente")) {
  trocarDepoimento();
  setInterval(trocarDepoimento, 4000);
}

// --- MENU MOBILE ---
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}