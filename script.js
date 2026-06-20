const depoimentos = [
{
nome:"Carlos Silva",
texto:"Excelente atendimento. Minha residência ficou totalmente automatizada."
},

{
nome:"Mariana Souza",
texto:"Projeto impecável. Recomendo para quem busca conforto e tecnologia."
},

{
nome:"Roberto Lima",
texto:"Instalação rápida, organizada e suporte excelente."
}
];

let indice = 0;

function trocarDepoimento(){

document.getElementById("texto-depoimento").textContent =
depoimentos[indice].texto;

document.getElementById("nome-cliente").textContent =
depoimentos[indice].nome;

indice++;

if(indice >= depoimentos.length){
indice = 0;
}

}

trocarDepoimento();

setInterval(trocarDepoimento,4000);