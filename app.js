let tentativa = 1;
let listaNumerosSorteado = [];
let listaNumeroTentados = [];
let numeroSecreto = gerarNumeroAleatorio();

main()
function main(){
    document.getElementById("reiniciar").setAttribute("disabled", "disabled");
    exibirTextoNaTela("h1", "Adivinhe o número secreto");
    exibirTextoNaTela("p", "Digite um número de 1 a 10");
}


function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto) {
        let tentativap = tentativa > 1 ? "tentativas" : "tentativa";
        let mensagemAcertou = `Você acertou com ${tentativa} ${tentativap}`;
        exibirTextoNaTela("h1", "Parabéns");
        exibirTextoNaTela("p", `${mensagemAcertou}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        console.log(tentativa)
        if (chute > numeroSecreto){
            exibirTextoNaTela("h1", "Opa!");
            exibirTextoNaTela("p", `O número ${chute} é maior que o número secreto`);
        } else {
            exibirTextoNaTela("h1", "Opa!");
            exibirTextoNaTela("p", `O número ${chute} é menor que o número secreto`);
        }
        tentativa ++;
        limpaCampo();
    }
}

function reniciaJogo(){
    limpaCampo();
    main();
    numeroSecreto = gerarNumeroAleatorio();
}

function limpaCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}



function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* 10 + 1);
    if (listaNumerosSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteado.push(numeroEscolhido)
        console.log(listaNumerosSorteado)
        return numeroEscolhido
    }
    
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
