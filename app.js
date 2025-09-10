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
menuInicial();

//criando o loop infinito através do "do while"
do {
    //prompt principal relacionado ao menu    
    menu = parseInt(prompt('Para reimprimir o MENU(6) ou SAIR(7) | Escolha um código do MENU: '));
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    //utilizando o "switch" para gerenciar o MENU, objetivo é que cada CASE chame uma função entre as oções de 1 à 7
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

        case 7:
            console.log('=-=-=-=-Obrigado por utilizar nosso sistema. Volte Sempre!=-=-=-=-=');
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;
        
        default:
            console.log('Error - Digita um código válido');
            break;
    }

//condicional do "do while" para sair do loop infinito
} while (menu != 7);

//função de classificação de nadador por idade
function classificarNadador() {
    //variável de coleta da idade   
    let idade = parseInt(prompt('Digite a idade do nadador: '));
    
    //primeiro if de verificação para menores de 4 anos ou números negativos
    if (idade <= 4) {
        console.log('Nadador não tem idade suficiente!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 5 && idade <= 7) {
        console.log('Nadador pertence ao INFANTIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 8 && idade <= 10) {
        console.log('Nadador pertence ao INFANTIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 11 && idade <= 13) {
        console.log('Nadador pertence ao JUVENIL A');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 14 && idade <= 17) {
        console.log('Nadador pertence ao JUVENIL B');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else if (idade >= 18) {
        console.log('Nadador é MAIOR de 18 anos.');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    } 
    else {
        //tratamento de entrada inválida como strings
        console.log('Error - Digite um valor válido!');
        console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
    }
}

//função para cálculo da média com menu de escolha de duas opções
function calcularMedia() {
    //menu principal da função com legenda de opções de escolha
    console.log('-= FUNÇÃO MÉDIA DE TRÊS NOTAS -=-');
    console.log('| Código | Cargo                |');
    console.log('|--------|----------------------|');
    console.log('| 1      | Aritimética          |');
    console.log('| 2      | Ponderada (3,3,4)    |');
    console.log('| 3      | Hamônica             |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    //variável relacionada ao menu
    let menu = parseInt(prompt('Escolha um código do MENU:  '));

    //variáveis de coleta das notas
    let nota1 = parseInt(prompt('Digite a primeira nota: '));
    let nota2 = parseInt(prompt('Digite a segunda nota: '));
    let nota3 = parseInt(prompt('Digite a terceira nota: '));

    //switch que relaciona a variável menu com as opçoes escolhidas entre 1, 2 e 3
    switch (menu) {
        case 1:
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                let mediaAritmetica = (nota1 + nota2 + nota3) / 3;
                console.log(`A média Aritimética das três notas é: ${mediaAritmetica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        case 2:
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                let mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4);
                console.log(`A média Ponderada(pesos 3,3,4) das três notas é: ${mediaPonderada.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;
        
        case 3:
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                let mediaHamonica = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
                console.log(`A média Harmônica das três notas é: ${mediaHamonica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        default:
            console.log('Error - Digita um código válido');
            break;
    }
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
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
    console.log('|                                                                        |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=- SISTEMA DE FUNÇÕES ÚTEIS =-=-=-=-=-=-=-=-=-=-=-=-');
    console.log('| Código | Função                    | Explicação                        |');
    console.log('|--------|---------------------------|-----------------------------------|');
    console.log('|    1   | Classificar Nadador       | Turma x Idade                     |');
    console.log('|    2   | Calcular Média            | Média entre 3 notas               |');
    console.log('|    3   | Calcular Cérdito          | Retorna valor médio e crédito     |');
    console.log('|    4   | Calcular Débito Total     | Quant. de produto com valor total |');
    console.log('|    5   | Calcular Aumento Salarial | Acrércimo por percentual          |');
    console.log('|    6   | Menu                      | Impressão do Menu                 |');
    console.log('|    7   | Sair                      | Sair do sistema                   |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');
}