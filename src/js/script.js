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


//DOM (DOcumento OBJECT MODEL)
const Titulo=document.getElementById("titulo")

Titulo.innerText= "O DOM MUDOU o TEXO"

Titulo.style.color="blue"


// CRIANDO O APP 

//  primeira coisa a fazer é o banco de dados!

    const produtos = [
        {nome: "Teclado Mêcanico", preco:300, emPromocao:true},
        {nome: "Mouse Gamer", preco:150, emPromocao:false},
        {nome: "Monitor Gamer", preco:1300, emPromocao:true},
        {nome: "Mousepad XL", preco:400, emPromocao:false}
    ];

    // map cria um novo array identificando uma condicao
    const container = document.getElementById("listar-produtos")
    const mostrarTotal = document.getElementById("resultado-total")

    // FUNCTION map: trasnforma o array de objetos em um array de strings html e css

    function todosProdutos(lista){
        mostrarTotal.innerText="";
        const htmlProdutos =lista.map(item =>`
            <div class="card">
                <h3>${item.nome}</h3>
                <p>Preço: R$ ${item.preco}</p>
                ${item.emPromocao ? '<span class="tag">Promoção</span>': ''}
            </div>
            `).join(''); //transforma o array em uma unica string

            container.innerHTML=htmlProdutos;

    }

// PROCURAR NO CLAUDE O QUE ESSE FUNCTION TODOS PRODUTOS FAZ + COMO USAR OS PARAMETROS

//FILTER - cria uma nova lista apenas com o que selecionou

function filtrarPromocoes(){
    const promocionais = produtos.filter(item => item.emPromocao); //arrow function?? 
    todosProdutos(promocionais);

}

// REDUCE = Reduz o array a um unico valor(soma dos precos)

function calcularTotal(){
    const total = produtos.reduce((acumulador,item)=>{
        return acumulador + item.preco;
    },0);
    mostrarTotal.innerText = `Valor Total R$ ${total}`;
}