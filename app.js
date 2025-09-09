/*
console.log('=-=-=-=-=-=-SISTEMA DE CÁLCULO SALARIAL-=-=-=-=-=-=-=-');
console.log('| Código | Cargo                | Percentual de Aumento |');
console.log('|--------|----------------------|-----------------------|');
console.log('| 1      | Escrituário          | 50%                   |');
console.log('| 2      | Secretário           | 30%                   |');
console.log('| 3      | Caixa                | 20%                   |');
console.log('| 4      | Gerente              | 10%                   |');
console.log('| 5      | Diretor              | 5%                    |');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
*/

//chamando a biblioteca prompt-sync para gerar os prompts
const prompt = require('prompt-sync') ([singint=true]);

//para que o while funcione a variável tem que estar fora do loop
let menu;

//função que chama o menu principal, reduz a repetição de código 
menuInicial()

//criando o loop infinito através do "do while"
do {
    //prompt principal relacionado ao menu    
    menu = parseInt(prompt('Para reimprimir o MENU(6) ou SAIR(7) | Escolha um código do MENU: '));
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')

    //utilizando o "switch" para gerenciar o MENU, objetivo é que cada CASE chame uma função
    switch (menu) {
        case 1:
            classificarNadador();
            break;
    
        case 2:
            calcularMedia();
            break;
        
        case 3:
            calcularCredito();
            break;
        
        case 4:
            calcularDebido();
            break;
    
        case 5:
            calcularAumento();
            break;
        
        case 6:
            menuInicial();
            break;
        
        default:
            console.log('Error - Digita um código válido');
            break;
    }

//condicional do "do while" para sair do loop infinito
} while (menu != 7);

//função de classificação do nadador
function classificarNadador() {   
    idade = parseInt(prompt('Digite a idade do nadador: '))
    
    //primeiro if de verificação para menores de 4 anos ou números negativos
    if (idade <= 4) {
        console.log('Nadador não tem idade suficiente!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else if (idade >= 5 && idade <= 7) {
        console.log('Nadador pertence ao INFANTIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else if (idade >= 8 && idade <= 10) {
        console.log('Nadador pertence ao INFANTIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else if (idade >= 11 && idade <= 13) {
        console.log('Nadador pertence ao JUVENIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else if (idade >= 14 && idade <= 17) {
        console.log('Nadador pertence ao JUVENIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else if (idade >= 18) {
        console.log('Nadador é MAIOR de 18 anos.');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    } 
    else {
        //tratamento de entrada inválida como strings
        console.log('Error - Digite um valor válido!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
    }
}

function calcularMedia() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Média')
}

function calcularCredito() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Idade')
}

function calcularDebido() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Débito')
}

function calcularAumento() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Aumento')
}

function menuInicial() {
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-MENU DE PARA FUNÇÕES ÚTEIS=-=-=-=-=-=-=-=-=-=-=-=-');
    console.log('| Código | Função                    | Explicação                        |');
    console.log('|--------|---------------------------|-----------------------------------|');
    console.log('| 1      | Classificar Nadador       | Turma x Idade                     |');
    console.log('| 2      | Calcular Média            | Média entre 3 notas               |');
    console.log('| 3      | Calcular Cérdito          | Retorna valor médio e crédito     |');
    console.log('| 4      | Calcular Débito Total     | Quant. de produto com valor total |');
    console.log('| 5      | Calcular Aumento Salarial | Acrércimo por percentual          |');
    console.log('| 6      | Menu                      | Impressão do Menu                 |');
    console.log('| 7      | Sair                      | Sair do sistema                   |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
}