import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente();
const cliente2 = new Cliente();
const ContaCorrenteHenrique = new ContaCorrente();
const ContaCorrenteLuisa = new ContaCorrente();

cliente1.nome = "Henrique";
cliente1.cpf = 12332112300;
ContaCorrenteHenrique.agencia = 101;
ContaCorrenteHenrique.saldo = 10000;
ContaCorrenteHenrique.cliente = cliente1;

cliente2.nome = "Luisa";
cliente2.cpf = 45612345628;
ContaCorrenteLuisa.agencia = 101;
ContaCorrenteLuisa.saldo = 15602;

console.log(cliente1);
console.log(cliente2);

console.log(ContaCorrenteHenrique.saldo);
ContaCorrenteHenrique.sacar(7000);
console.log(ContaCorrenteHenrique.saldo);

console.log("Henrique ganhou na loteria: ");
console.log(ContaCorrenteHenrique.saldo);
ContaCorrenteHenrique.depositar(1000000);
console.log(ContaCorrenteHenrique.saldo);

const valorSacado = ContaCorrenteHenrique.sacar(523);
console.log(ContaCorrenteHenrique.saldo);
console.log(valorSacado);

console.log(ContaCorrenteHenrique);