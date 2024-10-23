
// só o nome
{/*const minimist = require("minimist")

const argumentos = minimist(process.argv.slice(2))

console.log(argumentos)

const nome = argumentos["nome"]

console.log(nome)*/}


// nome com sobrenome
const minimist = require("minimist");

const argumentos = minimist(process.argv.slice(2));

console.log(argumentos);

const nome = argumentos["nome"];
const sobrenome = argumentos["sobrenome"];

console.log(`Nome: ${nome} ${sobrenome}`);
