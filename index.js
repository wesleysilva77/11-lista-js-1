/**** Escreva o código abaixo 👇******/

function somar(a, b) {
    return a + b;
}

function multiplicar(a, b) {
    return a * b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Erro: divisão por zero");
    }
    return a / b;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    return soma / 4;
}


function elevarPotencia(base, expoente) {
    return Math.pow(base, expoente);
} 

function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
} 

function verificarParOuImpar(numero) {
    return numero % 2 === 0 ? "par" : "ímpar";
} 

function calcularRaizQuadrada(numero) {
    if (numero < 0) {
        return "Erro: número negativo";
    }
    return Math.sqrt(numero);
}

function calcularHipotenusa(catetoA, catetoB) {
    return Math.sqrt(Math.pow(catetoA, 2) + Math.pow(catetoB, 2));
}


/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
