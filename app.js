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
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaAritmetica = (nota1 + nota2 + nota3) / 3;
                console.log(`A média Aritimética das três notas é: ${mediaAritmetica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        case 2:
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaPonderada = (nota1 * 3 + nota2 * 3 + nota3 * 4) / (3 + 3 + 4);
                console.log(`A média Ponderada(pesos 3,3,4) das três notas é: ${mediaPonderada.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;
        
        case 3:
            //if de validação entre os número 0 à 10, caso digitado string ou outro número apresente erro
            if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10) {
                //formula e retorno
                let mediaHamonica = 3 / (1 / nota1 + 1 / nota2 + 1 / nota3);
                console.log(`A média Harmônica das três notas é: ${mediaHamonica.toFixed(2)}`);
                console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            } else {
                console.log('Error - Notas devem conter apenas números de 0 a 10!')
            }
            break;

        default:
            //validando códigos digitados erradamente no submenu
            console.log('Error - Digita um código válido');
            break;
    }
}

function calcularCredito() {
    let nun = parseInt(prompt('Digite um número: '))
    console.log('Débito')
    
}
//função para calcular o débito de compra do cliente
function calcularDebido() {
    //menu principal da função com legenda de opções de escolha
    console.log('=-=-=-= SISTEMA DE CALCULO TOTAL -=-=-=-');
    console.log('| Código | Produto          | Valor R$ |');
    console.log('|--------|------------------|----------|');
    console.log('|   2    | Camisa de Manga  | R$ 32,00 |');
    console.log('|   3    | Caneca           | R$ 45,00 |');
    console.log('|   4    | Bolsa            | R$ 37,00 |');
    console.log('|   5    | Vestido          | R$ 32,00 |');
    console.log('|   6    | Bermuda          | R$ 45,00 |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=');
    //dicionário com cod. e valor do produto, podendo ser auterado sem comprometer o código
    let produtos = {2:32, 3:45, 4:37, 5:32, 6:45};
    
    //interação com o menu e captura da quantidade
    let menu = parseInt(prompt('Escolha um código do MENU: '));
    let quantidade = parseInt(prompt('Digite a quantidade: '));

    switch (menu){
        case 2:
            //multiplicação da quantidade do produto com o produto do dicionário
            let totalCod2 = quantidade * produtos[2];
            console.log(`O valor total referente ao produro (Camisa de Manga) é: R$${totalCod2.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        case 3:
            //multiplicação da quantidade do produto com o produto do dicionário
            let totalCod3 = quantidade * produtos[3];
            console.log(`O valor total referente ao produro (Caneca) é: R$${totalCod3.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        case 4:
            //multiplicação da quantidade do produto com o produto do dicionário
            let totalCod4 = quantidade * produtos[4];
            console.log(`O valor total referente ao produro (Bolsa) é: R$${totalCod4.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        case 5:
            //multiplicação da quantidade do produto com o produto do dicionário
            let totalCod5 = quantidade * produtos[5];
            console.log(`O valor total referente ao produro (Vestido) é: R$${totalCod5.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;
        
        case 6:
            //multiplicação da quantidade do produto com o produto do dicionário
            let totalCod6 = quantidade * produtos[6];
            console.log(`O valor total referente ao produro (Bermuda) é: R$${totalCod6.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        default:
            //validando códigos digitados erradamente no submenu
            console.log('Error - Digita um código válido');
            break;
    } 
}

//função para cálcular aumento salarial
function calcularAumento() {
    //menu principal da função com legenda de opções de escolha
    console.log('=-=-=-=-=-=- SISTEMA DE AUMENTO SALARIAL -==-=-=-=-=-=-=-');
    console.log('| Código | Cargo                | Percentual de Aumento |');
    console.log('|--------|----------------------|-----------------------|');
    console.log('| 101    | Gerente              | 10%                   |');
    console.log('| 102    | Engenheiro           | 20%                   |');
    console.log('| 103    | Técnico              | 30%                   |');
    console.log('|        | Outros               | 40%                   |');
    console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

    //capitura do código do cardo e salário do funcionário
    let codCargo = parseFloat(prompt('Digite o código do funcionário ou deixe em branco: '));
    let salarioFuncionario = parseFloat(prompt('Digite o salário do funcionário: '));

    //interação com o submenu através do switch 
    switch (codCargo) {
        case 101:
            //calculo e retorno
            let acrescimoEmPercentual10 = (salarioFuncionario * 0.1) + salarioFuncionario;
            let diferencaEntreSalarios10 = acrescimoEmPercentual10 - salarioFuncionario;
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual10.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios10.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;
        
        case 102:
            //calculo e retorno
            let acrescimoEmPercentual20 = (salarioFuncionario * 0.2) + salarioFuncionario;
            let diferencaEntreSalarios20 = acrescimoEmPercentual20 - salarioFuncionario;
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual20.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios20.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        case 103:
            //calculo e retorno
            let acrescimoEmPercentual30 = (salarioFuncionario * 0.3) + salarioFuncionario;
            let diferencaEntreSalarios30 = acrescimoEmPercentual30 - salarioFuncionario;
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual30.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios30.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;

        default:
            //calculo e retorno
            let acrescimoEmPercentual40 = (salarioFuncionario * 0.4) + salarioFuncionario;
            let diferencaEntreSalarios40 = acrescimoEmPercentual40 - salarioFuncionario;
            //a ausência de dados em código ou a digitação errônea retornará o cálculo de 40$
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log('ATENÇÃO: Código do funcionário não informado - Aplicado reajuste padrão de 40%')
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            console.log(`Salário Antigo: R$${salarioFuncionario.toFixed(2)}`);
            console.log(`Salário Novo R$${acrescimoEmPercentual40.toFixed(2)}`);
            console.log(`Valor do Acrescimo R$${diferencaEntreSalarios40.toFixed(2)}`);
            console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');
            break;
    }
}

//função para o menu principal
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