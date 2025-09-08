console.log('=-=-=-=-=-=-SISTEMA DE CÁLCULO SALARIAL-=-=-=-=-=-=-=-');
console.log('| Código | Cargo                | Percentual de Aumento |');
console.log('|--------|----------------------|-----------------------|');
console.log('| 1      | Escrituário          | 50%                   |');
console.log('| 2      | Secretário           | 30%                   |');
console.log('| 3      | Caixa                | 20%                   |');
console.log('| 4      | Gerente              | 10%                   |');
console.log('| 5      | Diretor              | 5%                    |');
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');


const prompt = require('prompt-sync') ([singint=true]);

let menu;

do {
    
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-MENU DE PARA FUNÇÕES ÚTEIS=-=-=-=-=-=-=-=-=-=-=-=-');
    console.log('| Código | Função                    | Explicação                        |');
    console.log('|--------|---------------------------|-----------------------------------|');
    console.log('| 1      | Classificar Nadador       | Turma x Idade                     |');
    console.log('| 2      | Calcular Média            | Média entre 3 notas               |');
    console.log('| 3      | Calcular Cérdito          | Retorna valor médio e crédito     |');
    console.log('| 4      | Calcular Débito Total     | Quant. de produto com valor total |');
    console.log('| 5      | Calcular Aumento Salarial | Acrércimo por percentual          |');
    console.log('| 6      | Sair                      | Sair do sistema                   |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-');

    menu = parseInt(prompt('Escolha uma das opções do MENU ou 6 para SAIR: '));

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
    }

} while (menu != 6);


function classificarNadador() {   

    idade = parseInt(prompt('Digite a idade do nadador ou 6 para SAIR: '))
    
    if (idade => 5 && idade <= 7) {
            console.log('Nadador pertence ao INFANTIL A');
    } else if (idade => 8 && idade <= 10) {
            console.log('Nadador pertence ao INFANTIL B');
    } else if (idade => 11 && idade <= 13) {
            console.log('Nadador pertence ao JUVENIL A');
    } else if (idade => 14 && idade <= 17) {
            console.log('Nadador pertence ao JUVENIL B');
    } else {
            console.log('Nadador é MAIOR de 18 anos.');
    }
    return idade
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