/* 1 - A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
Caso a função receba algum valor não númerico ou um array vazio,
o valor undefined deve ser retornado.
Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

Parâmetros:
- Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
Comportamento:
- average([2, 2]) // Retorno: 2;
- average([1, 1]) // Retorno: 1;
- average([1, '2']) // Retorno: undefined;*/

const average = (array) => {
    if (array.length === 0) {
    return undefined;
    }
    let soma = 0;
    for (let index = 0; index < array.length; index += 1) {
    if (typeof array[index] !== 'number') {
    return undefined;
    }
    soma += array[index];
    }
    return Math.round(soma / array.length);
};
 
const assert = require('assert');
    
assert.strictEqual(average([3, 4, 5]), 4);
assert.strictEqual(average([1, 2, 3, '4', 5]), undefined);
assert.strictEqual(average([0, 0, 0, 0, 0, 0, 0]), 0);
assert.strictEqual(average([1, 2, '3']), undefined);
assert.strictEqual(average([1, 2, 3]), 2);
assert.strictEqual(average([0, 0, 0, 0, 0, 0, 1]), 0);
assert.strictEqual(average([]), undefined);
assert.strictEqual(average([' ']), undefined);
assert.strictEqual(average(['um', 'dois', 'tres']), undefined);
assert.strictEqual(average([47, 63, 122]), 77);
assert.strictEqual(average([-11, 2, 5]), -1);
assert.strictEqual(average([-11, -5, 2]), -5);
    
    
/* 2 - Essa função recebe o raio de um círculo,     retornando um objeto contendo suas 
informações (Raio, Área e Circunferência).
Se não for especificado um raio, a função retorna undefined.
Elabore testes para verificar se a função está correta.
    
Parâmetros:
- Um número inteiro. Exemplos: 1; 3;
Comportamento:
- circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
- circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
- circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}
    
DICA: Números de ponto flutuante em JavaScript são imprecisos! Para testar, vá no seu navegador e faça `0.2 + 0.1`.
Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1)).toPrecision(2)`.
Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!*/
    
const circle = (radius) => {
    const PI = 3.14;
    if (!radius) { return undefined; }
    return {
        radius,
        area: PI * radius * radius,
        circumference: 2 * PI * radius,
    };
};

const assert = require('assert');
    
// Teste se circle retorna um objeto.
assert.strictEqual(typeof circle(1), 'object');
// Teste se o objeto retornado tem 3 entradas.
assert.strictEqual(Object.entries(circle(2)).length, 3);
// Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
assert.strictEqual(circle(), undefined);
// Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
assert.strictEqual(circle(2).circumference, 12.56);
// Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
assert.strictEqual(circle(2).area, 12.56);
// Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
assert.deepStrictEqual(circle(3), { radius: 3, area: 28.259999999999998, circumference: 18.84 });
    
    
/*3 - Dada uma função chamada createStudent que recebe como parâmetro um nome,
retorne um objeto que contenha duas chaves:
(1) name, contendo o nome passado como parâmetro;
(2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.
    
Faça a função da chave feedback com arrow functions!
    
Parâmetros:
- Uma string;
Comportamento:
const estudante = createStudent('Leandrão, o Lobo Solitário')
    
estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
estudante.feedback() // Retorna: 'Eita pessoa boa!'*/
    
const createStudent = (nome) => {
    const estudante = {
        name: nome,
        feedback: () => 'Eita pessoa boa!',
    };
    return estudante;
};

const assert = require('assert');
    
const estudante = createStudent('Leandrão, o Lobo Solitário');
assert.strictEqual(typeof estudante, 'object');
assert.strictEqual(typeof estudante.feedback, 'function');
assert.strictEqual(estudante.name, 'Leandrão, o Lobo Solitário');
assert.strictEqual(estudante.feedback(), 'Eita pessoa boa!');
    
const estudante2 = createStudent('Nobre');
assert.strictEqual(typeof estudante2, 'object');
assert.strictEqual(typeof estudante2.feedback, 'function');
assert.strictEqual(estudante2.name, 'Nobre');
assert.strictEqual(estudante2.feedback(), 'Eita pessoa boa!');
    
const estudante3 = createStudent('Inácio');
assert.strictEqual(typeof estudante3, 'object');
assert.strictEqual(typeof estudante3.feedback, 'function');
assert.strictEqual(estudante3.name, 'Inácio');
assert.strictEqual(estudante3.feedback(), 'Eita pessoa boa!');
    
    
/*4 - A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
Corrija o código abaixo para que a função retorne o array correto.
    
Parâmetros:
- Nenhum.
    
Comportamento:
myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];*/
    
   
const myCounter = () => {
    const myArray = [];
    for (let counter = 0; counter <= 3; counter += 1) {
        myArray.push(counter);
        for (let index = 2; index <= 3; index += 1) {
            myArray.push(index);
        }
    }
    return myArray;
};
    
const assert = require('assert')

const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
assert.deepStrictEqual(myCounter(), expectedOutput);
    
   
/*5 - A função numbers recebe um array (tamanho variável),
retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.
    
Parâmetros:
- Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
Comportamento:
- numbers([2, 3, 4]); // Retorna: true
- numbers([2, 'errado', 5]); // Retorna: false*/
    
    
const numbers = (myArray) => {
    for (let i = 0; i < myArray.length; i += 1) {
        if (typeof myArray[i] !== 'number') {
            return false;
        }
    }
    return true;
};

const assert = require('assert');
    
// Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
assert.strictEqual(numbers([1, 2, 3, 4, 5]), true);
// Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
assert.strictEqual(numbers([1, 2, '3', 4, 5]), false);
// Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
assert.strictEqual(numbers([1, 'a', 3]), false);
// Escreva um teste em que a função recebe [' '] e retorna false
assert.strictEqual(numbers([' ']), false);
    
   
/*6 - Desenvolva um objeto calculator que possui quatro chaves:
- add;
- mult;
- div;
- sub.
Para cada uma delas atribua uma função que realiza a respectiva operação.
A função deve receber dois inteiros e retornar um inteiro.
Os resultados das divisões devem sempre ser arredondados para baixo.
    
Faça as funções com arrow functions!
   
Parâmetros:
- Um número inteiro;
- Um número inteiro;
    
Comportamento:
calculator.add(1, 1) // Retorno: 2;
calculator.div(3, 2) // Retorno: 1;*/
    
    
const calculator = {
    add: (num1, num2) => num1 + num2,
    mult: (num1, num2) => num1 * num2,
    div: (num1, num2) => Math.floor(num1 / num2),
    sub: (num1, num2) => num1 - num2,
};
    
const assert = require('assert');

assert.strictEqual(calculator.add(1, 3), 4);
assert.strictEqual(calculator.mult(10, 3), 30);
assert.strictEqual(calculator.div(5, 2), 2);
assert.strictEqual(calculator.sub(1, 3), -2);
    
    
/*7 - Dadas duas strings que representam nomes de produtos,
retorne um array contendo dois objetos com os detalhes dos respectivos produtos.
    
Parâmetros:
- Uma string;
- Uma string;
    
Comportamento:
productDetails('Alcool gel', 'Máscara') // Retorna:
[{
name: 'Alcool gel'
    details: {
        productId: 'Alcool gel123'
    }
},
{
name: 'Máscara'
    details: {
    productId: 'Máscara123'
    }
}]*/
    
const productDetails = (firstProduct, secondProduct) => [{
    name: firstProduct,
        details: {
            productId: `${firstProduct}123`,
        },
    },
    {
    name: secondProduct,
        details: {
            productId: `${secondProduct}123`,
        },
    },
];

const assert = require('assert');

// Teste que o retorno da função é um array.
assert.strictEqual(Array.isArray(productDetails()), true);
// Teste que o array retornado pela função contém dois itens dentro.
assert.strictEqual(productDetails('a','b').length, 2);
// Teste que os dois itens dentro do array retornado pela função são objetos.
assert.strictEqual(typeof productDetails('a','b'), "object");
// Teste que os dois objetos são diferentes entre si.
assert.notDeepStrictEqual(productDetails.name[0], productDetails.name[1]);
// (Difícil) Teste que os dois productIds terminam com 123.
assert.strictEqual(productDetails('a', 'b')[0].details.productId.slice(-3), '123');
assert.strictEqual(productDetails('a', 'b')[1].details.productId.slice(-3), '123');
      

/*8 - Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
- ler o menu cadastrado;
- fazer pedidos;
- verificar o que foi pedido;
- somar o valor da conta.
 
A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.
    
Parâmetros:
- Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
Comportamento:
    
const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).
   
meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }
    
meuRestaurante.order('coxinha') // Retorno: undefined
    
meuRestaurante.consumption // Retorno: ['coxinha']
    
meuRestaurante.pay() // Retorno: 3.9
    
Uma função createMenu retorna um objeto com as seguintes características:
- Uma chave `fetchMenu` associada a uma função, que retorna o objeto recebido por parâmetro na função `createMenu`. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:
    
const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
});
    
meuRestaurante.fetchMenu() // Retorno: Menu acima
    
- Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']
    
- Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.
    
- Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.
    
IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!*/
    
    
// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: objetoPassadoPorParametro }.
//
// Agora faça o TESTE 2 no arquivo `tests/restaurant.spec.js`.
    
//------------------------------------------------------------------------------------------
    
// PASSO 2: Adicione ao objeto retornado pela função `createMenu` uma chave `consumption` que, inicialmente, tem um array vazio.
   //
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.
    
//------------------------------------------------------------------------------------------
    
// PASSO 3: Crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função como valor da chave `order`.
// DICA: para criar isso, você vai precisar definir a função `createMenu()`, definir o objeto que a `createMenu()` deve retornar e, depois, a função que será atribuida a chave `order` deste objeto.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita e retorna o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona a string recebida como parâmetro `request` ao array contido na chave `consumption` do objeto `restaurant`. Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.
    
//------------------------------------------------------------------------------------------
    
// PASSO 4: Adicione ao objeto `restaurant`, que foi retornado pela função `createMenu()` uma chave `pay` com uma função que itera por todos os itens de `objetoRetornado.consumption`, soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso, você precisará iterar tanto pelo objeto da chave `food` quanto pelo objeto da chave `drink`.
    
const createMenu = () => { };
    

/*9 - Use template literals para escrever uma função que,
recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.
    
Parâmetros:
- Uma string;
- Um número.
Comportamento:
vqv(Tunico, 30) // Retorna:
Oi, meu nome é Tunico!
Tenho 30 anos,
trabalho na Trybe e mando muito em programação!
#VQV!'*/
    
const assert = require('assert');
    
const vqv = (nome, idade) => {
    if (nome === undefined || idade === undefined) {
        return undefined;
    }
    return `Oi, meu nome é ${nome}!
    Tenho ${idade} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`;
};
    
assert.strictEqual(typeof vqv, 'function');
assert.strictEqual(typeof vqv('Tunico', 30), 'string');
assert.strictEqual(
    vqv('Tunico', 29),
    'Oi, meu nome é Tunico!\n' +
    'Tenho 29 anos,\n' +
    'trabalho na Trybe e mando muito em programação!\n' +
    '#VQV!',
);
assert.strictEqual(
    vqv('Alberto', 30),
    'Oi, meu nome é Alberto!\n' +
    'Tenho 30 anos,\n' +
    'trabalho na Trybe e mando muito em programação!\n' +
    '#VQV!',
);
assert.strictEqual(
    vqv('Hamaji', 29),
    'Oi, meu nome é Hamaji!\n' +
    'Tenho 29 anos,\n' +
    'trabalho na Trybe e mando muito em programação!\n' +
    '#VQV!',
);
assert.strictEqual(vqv(), undefined);
    