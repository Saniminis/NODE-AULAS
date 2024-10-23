const fs = require('fs')

fs.readFile("teste.txt", "utf8", (erro, dados) => {
    if (erro) {
        console.log(erro)
    }
    else {
        console.log(dados)
    }
})

const mensagem1 = "Texto de olá"
const mensagem2 = "\n mesmo texto2"

fs.writeFile('teste2.txt', mensagem1, "utf8", (erro) => {
    if (erro) {
        console.log("deu erro")
    }
    else {
        console.log("sucesso")
    }
})

// -------------------------------------------------------

fs.appendFile('teste2.txt', mensagem2, "utf8", (erro) => {
    if (erro) {
        console.log("deu erro2")
    }
    else {
        console.log("sucesso2")
    }
})

// -------------------------------------------------------

fs.unlink('teste2.txt', (erro) => {
    if (erro) {
        console.log("não apagado")
    }
    else {
        console.log("apagado")
    }
})