//Criar uma função que exibe "Olá, mundo!" no console.
function saudacao(){
    console.log('Olá, mundo')  
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome){
    console.log(`Olá, ${nome}`)
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibeNumero(numero){
    console.log(parseInt(`${numero}` * 2)) 
}                                 
          
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function exibeMediaTresNumeros(num1, num2, num3){
    let media = (num1 + num2 + num3) / 3
    console.log(parseFloat(`${media}`)) 
}
 
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function retornaMaiorValorDoisNumero(num1, num2){
    if(num1 > num2){
        console.log(`Numero maior: ${num1}`)
    }else{
        console.log(`Numero maior: ${num2}`)
    }
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo                                                                                
function retornaMultiplicaco(numero){
    let multiplicacao = numero * numero
    console.log(`Multiplicação: ${multiplicacao}`)
}
 
saudacao()
exibeNome('Emilly')
exibeNumero(15)
exibeMediaTresNumeros(5, 2, 3)
retornaMaiorValorDoisNumero(5, 8)
retornaMultiplicaco(5)


//------------------------------------------------------------------------

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularTabuada(multiplicador = 2) {
    
    let x
    
    for(x = 1; x <= 10; x++){
        console.log()
    }

    let resultado = multiplicador
    return resultado
}
//calcularTabuada(2)
//console.log(calcularTabuada(`Numero: ${resultado}`))


//pop = remover item da lista
//push = adicionar item na lista

    console.log('****************Listas****************')
    let listaGenerica = []
    console.log(`Lista Genérica: ${listaGenerica}`)

    let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin', 'Python']
    console.log (`Lista Linguagens De Programacao: ${linguagensDeProgramacao}`)

    let exibirLista = ['C++', 'Kotlin', 'Python']
    console.log(exibirLista[0])
    
    linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang')
    console.log(`Lista Linguagens De Programacao adicionando itens ${linguagensDeProgramacao}`) 


