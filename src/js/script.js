// LIMPEZA 

const email ="        email@email.com        ";
const emailLimpo = email.trim(); //.trim é um metodo do js (acoes ligadas ao objeto), trim remove todos os espaços (" ")

console.log(emailLimpo)

// VALIDACAO 
if(emailLimpo.includes("@")){
    console.log("email válido")
} else {
    console.log("Email inválido")
}

// TRANSFORMACAO DE TEXTO

const tituloArtigo = "Como aprender JAVA RAIZ"

const texto1 = tituloArtigo.toLowerCase();
console.log(texto1)

const texto2 = tituloArtigo.split(" "); //DIVIDE O STRING POR LETRA POR LETRA SE FOR SPLIT(""), SE FOR (" ") É PALAVRA POR PALAVRA. TRANSFORMA O TEXTO EM UM ARRAY
console.log(texto2)

// join 0 junta tudo em uma unica string (processo reverso)
const texto3 = texto2.join(" "); //mudar o caractere entre aspas muda o que aparece entre as palavras
console.log(texto3)

//METODO toFixed, é pra ajustar as casas decimais

const precoProduto = 199.99
const desconto = 0.15;
const precoFinal = precoProduto *(1-desconto);
console.log(precoFinal);
console.log(`R$ ${precoFinal.toFixed(2)}`)

// template strings, concatenar com `



const Titulo=document.getElementById("titulo")

Titulo.innerText= "O DOM MUDOU o TEXO"

Titulo.style.color="blue"