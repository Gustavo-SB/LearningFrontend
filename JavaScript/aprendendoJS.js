console.log(`Trabalhando com atribuição de variáveis`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 18;
const estaAcompanhada = false;
const destino = `Salvador`;
listaDeDestinos.push(`Curitiba`);
console.log(`Destinos possíveis:`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada) {
    console.log("Comprador maior de idade");
    console.log(listaDeDestinos);
} else {
    console.log("Comprador menor de idade");
}

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;


let destinoExiste = false;
let contador = 0;



if(podeComprar && destinoExiste){
    console.log("Boa Viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0; cont < 3 ; cont ++){
    if(listaDeDestinos[contador] == destino){
    console.log("Destino existe");
    destinoExiste = true;
   
}
}