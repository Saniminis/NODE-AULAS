//ulização de módulo externo via npm
const minimist = require("minimist")
const argumentos = minimist(process.argv.slice(2))

//utilizar módulo interno
const moduloSoma = require("../modulo_interno")
const funcSoma = moduloSoma.soma
const a = argumentos["a"]
const b = argumentos["b"]
funcSoma(a, b)

// utilização de core modules
const fs = require('fs')
const resultado = funcSoma(a,b)

fs.writeFile("resultado.txt", resultado, "utf-8", (erro, dados) => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log(dados)
    }
})