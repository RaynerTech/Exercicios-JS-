//Simples, remova os espaços da string e retorne a string resultante.
//
//esta função devera ser usada 
//function noSpace(x){
//
//}


function noSpace(x){
    return x.replace(/ /g, "");
}

console.log(noSpace('vamos ver '))


//O objetivo deste kata é escrever uma função que receba duas entradas: uma string e um caractere. A 
//função contará o número de vezes que esse caractere aparece na string. A contagem não diferencia maiúsculas de minúsculas

//For example:
//
//countChar("fizzbuzz","z") => 4
//countChar("Fancy fifth fly aloof","f") => 5
//The character can be any alphanumeric character.

function countChar(string, char) {
    var contador = 0;
    for (var i = 0; i < string.length; i++) {
      if (string[i].toLowerCase() === char.toLowerCase()) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log(countChar("fizzbuzz","z")); 
  console.log(countChar("Fancy fifth fly aloof","f")); 


 // Ei programador incrível! Você tem muitos dados para gerenciar e, claro, usa IDs com base zero e não negativos para tornar cada item de dados único! Portanto, 
 // você precisa de um método que retorne o menor ID não utilizado para seu próximo novo item de dados... Observação: a matriz fornecida de IDs usados ​​pode não ser classificada. 
 // Por motivos de teste, pode haver IDs duplicados, mas você não precisa encontrá-los ou removê-los! Vá em frente e codifique alguma grandiosidade pura!

 function nextId(ids){
    for(i=0;i<=ids.length;i++){
      if(!ids.includes(i)){
        return i
      }
    }
  }
  
  console.log(nextId([0,1,2,3,5]))



  //Dado um inteiro como entrada, você pode arredondar para o próximo múltiplo (ou seja, "maior") de 5?
  //exemplo:  input:    output:
//0    ->   0
//2    ->   5
//3    ->   5
//12   ->   15
//21   ->   25
//30   ->   30
//-2   ->   0
//-5   ->   -5
//etc.


function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }


//Você leva seu filho para a floresta para ver os macacos. Você sabe que há um certo número lá (n),
//mas seu filho é muito novo para apenas apreciar o número inteiro, ele tem que começar a contá-los a partir de 1.
//Como um bom pai, você vai sentar e contar com ele. Dado o número (n), preencha uma matriz com todos os números até e incluindo esse 
//número, mas excluindo zero. Por exemplo:
//For example(Input --> Output):
//
//10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//1 --> [1]

function monkeyCount(n) {
  var newArray = [];
  for (var i = 1; i <= n; i++) {
      newArray.push(i);
  }
  return newArray;
}



//Escreva um método que obterá um array inteiro como parâmetro e processará todos os números 
//desse array. Retorne um novo array com o processamento de cada número do array de entrada assim:
//Example
//[4,3,9,7,2,1] -> [2,9,3,49,4,1]




function squareOrSquareRoot(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      result.push(Math.sqrt(array[i]));
    } else {
      result.push(array[i] * array[i]);
    }
  }
  return result;
}



//A medida stanton de uma matriz é calculada da seguinte forma: conte o número de 1s na matriz. Que esta contagem seja n. A medida de Stanton é o número de vezes que n aparece na matriz.
//
//Escreva uma função que pegue uma matriz de inteiros e retorne sua medida stanton.
//
//Exemplos
//A medida de Stanton de [1, 4, 3, 2, 1, 2, 3, 2] é 3, porque 1 ocorre 2 vezes na matriz e 2 ocorre 3 vezes.
//A medida de Stanton de [1, 4, 1, 2, 11, 2, 3, 1] é 1, porque 1 ocorre 3 vezes na matriz e 3 ocorre 1 vez.


function stantonMeasure(array){

  const Count = array.filter(a => a === 1).length
  const repetindoNumber = array.filter(a => a === Count).length
  return repetindoNumber
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]))
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]))
console.log(stantonMeasure([1, 1, 1, 2, 2, 2, 3]))
console.log(stantonMeasure([1, 1, 1, 1, 2, 2, 3, 3]))


//É bem direto. Seu objetivo é criar uma função que remova o primeiro e o último caractere de uma string. Você recebe um parâmetro, a string original. 
//Você não precisa se preocupar com strings com menos de dois caracteres.


function removeChar(str) {
  return str.slice(1, -1)
}

console.log(removeChar('eloquent'), 'loquen')


//Complete a solução para que ela inverta a string passada para ela.
//
//Exemplo
//'world'  =>  'dlrow'
//'word'   =>  'drow'


function solution(str){
  return str.split('').reverse().join('');
}

console.log((solution('world'), 'dlrow'))
console.log((solution('hello'), 'olleh'))


//Precisamos de uma função que possa transformar um número em uma corda.
//Que maneiras de conseguir isso você sabe?
//Exemplos:
//123 --> "123"
//999 --> "999"

function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}
console.log(numberToString(123));

//Questão
//Parece que um encanador de bandidos e seu irmão tem andado por aí e danificando seus palcos de novo.
//Os tubos que conectam os estágios do seu nível juntos precisam ser corrigidos antes de receber mais reclamações.
//A lista de tubos está correta quando cada tubo após o primeiro índice é maior (+1) do que o anterior, e que não há duplicatas.
//Tarefa
//Dada a lista de números, devolva uma lista fixa para que os valores aumentem em 1 para cada índice a partir do valor mínimo
//até o valor máximo (ambos incluídos).
//Exemplo
//Entrada: 1,3,5,6,7,8 Saída: 1,2,3,4,5,6,7,8

function pipeFix(numbers){
  let min = Math.min(...numbers)
  let max = Math.max(...numbers)
  let result = []
  for(let i = min; i <= max; i++){
    result.push(i)
  }
  return result
}

console.log(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);
console.log(pipeFix([6,9]),[6,7,8,9]);


//Vamos construir um sistema de matchmaking que ajude a descobrir empregos para desenvolvedores com base em vários fatores. Um dos fatores mais simples, porém mais importantes, é a compensação. 
//Como desenvolvedores, sabemos quanto dinheiro precisamos para sustentar nosso estilo de vida, então geralmente temos uma ideia aproximada do salário mínimo com o qual ficaríamos satisfeitos. Vamos tentar isso. 
//Criaremos uma função matchque recebe a candidatee a job, que retornará um booleano indicando se o trabalho é uma correspondência válida para o candidato.

//Um canditado terá um salário mínimo
//
// let candidate = {
//minSalary: 120000
//}
//Copiar para àrea de transferência
//Um serviço terá um pagamento máximo
//
// let job = {
//maxSalary: 140000
//}
//Copiar para àrea de transferência
//Se o salário mínimo do candidato ou o salário máximo do trabalho não estiver presente, lance um erro. Para uma correspondência válida, o salário mínimo do 
//candidato deve ser menor ou igual ao salário máximo do cargo. No entanto, vamos incluir também 10% de espaço de manobra (deduzido do salário mínimo do candidato) 
//caso o candidato seja um rockstar que goste de programar no Codewars em seu tempo livre. A empresa que oferece o trabalho pode ser capaz de resolver algo.


//const match = (candidate, job ) => {  solução legal 
//  console.log(candidate.minSalary, job.maxSalary);
//  
//  if(!candidate.minSalary  || !job.maxSalary) {
//    throw new Error(123);
//  }
//  
//  
//   return  candidate.minSalary - candidate.minSalary/10 <= job.maxSalary 
//  }
//  

function match(candidate, job) {

  if (!candidate.minSalary || !job.maxSalary) throw "Error"
  return candidate.minSalary * .9 <= job.maxSalary
}


//Você se deparou com o prazer divino que é possuir um cachorro e um jardim. Agora é hora de pegar todos os cr@p! :D
//Dada uma matriz 2D para representar seu jardim, você deve encontrar e coletar todos os cães cr@p - representados por '@'.
//Você também receberá o número de malas às quais você tem acesso (bolsas) e a capacidade de uma mala (cap). Se não houver malas, você não pode pegar nada, então pode ignorar o cap.
//Você precisa descobrir se tem capacidade suficiente para coletar todo o cr@p e deixar seu jardim limpo novamente.
//Se você fizer isso, retorne 'Clean', caso contrário, retorne 'Cr@p'.
//Cuidado, porém - se o seu cão está lá fora ('D'), ele fica muito sensível ao ser observado. Se ele estiver lá, você precisa retornar 'Dog!!'.Você se deparou com o prazer divino que é possuir um cachorro e um jardim. Agora é hora de pegar todos os cr@p! :D
//Dada uma matriz 2D para representar seu jardim, você deve encontrar e coletar todos os cães cr@p - representados por '@'.
//Você também receberá o número de malas às quais você tem acesso (bolsas) e a capacidade de uma mala (cap). Se não houver malas, você não pode pegar nada, então pode ignorar o cap.
//Você precisa descobrir se tem capacidade suficiente para coletar todo o cr@p e deixar seu jardim limpo novamente.
//Se você fizer isso, retorne 'Clean', caso contrário, retorne 'Cr@p'.
//Cuidado, porém - se o seu cão está lá fora ('D'), ele fica muito sensível ao ser observado. Se ele estiver lá, você precisa retornar 'Dog!!'.
//Exemplo
//let x=
//[[_,_,_,_,_,_]
//[_,_,_,_,@,_]
//[@,_,_,_,_,_]]
//bags = 2, cap = 2
//return --> 'Clean'


function crap(x, bags, cap){   SOLUÇÃO DIFERENTE 
  var cont=0
  for(let i=0; i<x.length;i++){
    for(let j=0;j<x[i].length;j++){
      if(x[i][j]== '@'){
        cont++
      }else if(x[i][j]=='D'){
        return 'Dog!!'
      }
    }
  }
  if(cont<=bags * cap){
    return 'Clean'
  }else{
    return 'Cr@p'
  }
}

let x = [["_", "_", "_", "_", "_", "_"],
  ["_", "_", "_", "_", "@", "_"],
  ["@", "_", "_", "_", "_", "_"]
]

function crap(x, bags, cap) {
  let totalDeCacas = 0;
  for (let i = 0; i < x.length; i++) {
      for (let j = 0; j < x.length; j++) {
          if (x[i][j] === "@") {
              totalDeCacas++;
          }
      }
  }

  if (totalDeCacas <= bags * cap) {
      return "Clean";
  } else {
      return "Cr@p";
  }

}

console.log(crap(x, 2, 2));


//Dadas as representações de cordas de dois inteiros, retorne a representação de sequência da soma desses inteiros.
//
//Por exemplo:
//
//somastrings ('1','2') // => '3'
//Uma representação de sequência de cordas de um inteiro não conterá caracteres além dos dez numerais "0" a "9".


//function sumStrings(a, b) {
//    let a1 = a.split("").map(a => Number(a)), b1 = b.split("").map(b => Number(b));
//    let carry = 0;                                                                      OUTRA FORMA DE FAZER
//    let answer = []
//    for (let i = a1.length - 1, j = b1.length - 1; i >= 0 || j >= 0; i--, j--) {
//        let sum = a1[i] + b1[j] + carry;
//        if (sum < 10) {
//            answer.push(sum);
//            carry = 0;
//        } else {
//            answer.push(sum - 10);
//            carry = 1;
//        }
//    }
//    if (carry === 1) {
//        answer.push(1);
//    }
//    return answer.reverse().join("");
//}
//
//
//console.log(sumStrings('123', '456'));
//console.log(sumStrings('0', '0'));
//console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
//console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));



function sumStrings(a,b) { 
  let answer = [], a1 = a.split("").map(a => Number(a)), b1 = b.split("").map(b => Number(b))
  let carregando = 0
 for (let i = a1.length - 1, j = b1.length - 1; i >= 0 || j >= 0; i--, j--) {
    let sum = a1[i] + b1[j] + carregando
    if (sum < 10) {
      answer.push(sum);
        carregando = 0;
    } else {
         answer.push(sum - 10);
         carregando = 1;
      }
 }
  if (carregando === 1) {
      answer.push(1);
  }
  return answer.reverse().join("");
}

console.log(sumStrings('123', '456'));
console.log(sumStrings('0', '0'));
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'));
console.log(sumStrings('50095301248058391139327916261', '81055900096023504197206408605'));
console.log(sumStrings('123', '456'));

//Coverter Fahrenheit to Celsius

function toCelsius(f) {
  return (5/9) * (f-32);
}
console.log(toCelsius(100))



function calc(numero1,numero2){
  let result = numero1 * numero2
  return result
}

console.log(calc(20,30))


//Você está escrevendo um código para controlar os semáforos da sua cidade. Você precisa de uma função para lidar com cada alteração de green, para yellow, para rede depois para green novamente.
//Complete a função que recebe uma string como argumento representando o estado atual da luz e retorna uma string representando o estado para o qual a luz deve mudar.
//Por exemplo, update_light('green')deve retornar 'yellow'.
//Nota: Use ""em vez de ''em C++.

function updateLight(current) {
  if(current === "green") {
    return "yellow";
  } else if(current === "yellow") {
      return "red";
  } else if(current === "red") {
      return "green";
  }
}

//Escreva uma função que aceite dois inteiros e retorne o restante da divisão do valor maior pelo valor menor. 
//Divisão por zero deve retornar NaN
//Examples:
//n = 17
//m = 5
//result = 2 (remainder of `17 / 5`)
//
//n = 13
//m = 72
//result = 7 (remainder of `72 / 13`)
//
//n = 0
//m = -1
//result = 0 (remainder of `0 / -1`)
//
//n = 0
//m = 1
//result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  if(n>m){ 
  return n%m
  }
  else{
  return m%n
  }
}
console.log(remainder(5,2))
console.log(remainder(7,72))
console.log(remainder(0,-1))
console.log(remainder(0,1))




//Timmy e Sarah pensam que estão apaixonados, mas perto de onde moram, eles só saberão quando colherem uma flor cada. 
//Se uma das flores tiver um número par de pétalas e a outra tiver um número ímpar de pétalas, significa que eles estão apaixonados. 
//Escreva uma função que pegue o número de pétalas de cada flor e retorne true se elas estiverem apaixonadas e false se não estiverem.

function lovefunc(flower1, flower2){
  if (flower1 % 2 === 0 && flower2 % 2 === 1){
    return true
  } 
  else if (flower1 % 2 === 1 && flower2 % 2 === 0){
    return true
  }
  else {
    return false
  }
}

console.log(lovefunc(1,4))
console.log(lovefunc(0,0))



//Escreva uma função que leve uma sequência de parênteses e determine se a ordem dos parênteses é válida. A função deve retornar se a sequência for válida e se for inválida.truefalse
//
//Exemplos
//"()"              =>  true
//")(()))"          =>  false
//"("               =>  false
//"(())((()())())"  =>  true
//Restrições
//0 <= input.length <= 100


function validParentheses(parens) {
  let n = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++
    if (parens[i] == ')') n--
    if (n < 0) return false
  }
 
  if (n == 0) return true
  return false
}






//Fundo Sudoku
//Sudoku é um jogo jogado em um grid 9x9. O objetivo do jogo é encher todas as células da grade com dígitos de 1 a 9, de modo que cada coluna, cada linha, e cada uma das nove sub-grades 3x3 (também conhecidas como blocos) contenham todos os dígitos de 1 a 9.
//(Mais informações em: http://en.wikipedia.org/wiki/Sudoku)
//
//Validador de soluções Sudoku
//Escreva uma função // que aceite uma matriz 2D representando uma placa Sudoku e retorne verdadeira se for uma solução válida ou falsa de outra forma. As células da placa sudoku também podem conter 0's, o que representará células vazias. Placas contendo um ou mais zeros são consideradas soluções inválidas.validSolutionValidateSolutionvalid_solution()
//
//A placa é sempre 9 células por 9 células, e cada célula contém apenas inteiros de 0 a 9.
//
//Exemplos
//validSolution([
//  [5, 3, 4, 6, 7, 8, 9, 1, 2],
//  [6, 7, 2, 1, 9, 5, 3, 4, 8],
//  [1, 9, 8, 3, 4, 2, 5, 6, 7],
//  [8, 5, 9, 7, 6, 1, 4, 2, 3],
//  [4, 2, 6, 8, 5, 3, 7, 9, 1],
//  [7, 1, 3, 9, 2, 4, 8, 5, 6],
//  [9, 6, 1, 5, 3, 7, 2, 8, 4],
//  [2, 8, 7, 4, 1, 9, 6, 3, 5],
//  [3, 4, 5, 2, 8, 6, 1, 7, 9]
//]); // => true
//validSolution([
//  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
//  [6, 7, 2, 1, 9, 0, 3, 4, 8],
//  [1, 0, 0, 3, 4, 2, 5, 6, 0],
//  [8, 5, 9, 7, 6, 1, 0, 2, 0],
//  [4, 2, 6, 8, 5, 3, 7, 9, 1],
//  [7, 1, 3, 9, 2, 4, 8, 5, 6],
//  [9, 0, 1, 5, 3, 7, 2, 1, 4],
//  [2, 8, 7, 4, 1, 9, 6, 3, 5],
//  [3, 0, 0, 4, 8, 1, 1, 7, 9]
//]); // => false



function validSolution(board){
  for(let i = 0; i < board.length; i++){
    let list = board[i].reduce(function(a,b){return a + b;})
    if(list !== 45) return false;
  }
  for(let i = 0; i < board[0].length; i++){
    var list = 0;
    for(let j = 0; j < board.length; j++){
      list += board[j][i];
    }
    if(list !== 45) return false;
  }
  for(let i = 0; i < board.length; i+=3){
    for(let j = 0; j < board[0].length; j+=3){
      let list = 0;
      for(let k = 0; k < 3; k++) {
        for(let l = 0; l < 3; l++) {
          list += board[i+k][j+l];
        }
      }
      if(list !== 45) return false;
    }
  }
  return true;
}


//Escreva uma função que leve uma sequência de aparelhos e determine se a ordem dos aparelhos é válida. Deve retornar verdadeiro se a sequência for válida, e falsa se for inválida.
//
//Este Kata é semelhante ao Valid Parheses Kata, mas introduz novos caracteres: suportes [], e chaves cacheadas {}. Graças a @arnedag pela ideia!
//
//Todas as cordas de entrada serão nonempty, e consistirão apenas de parênteses, suportes e chaves: ()[]{}./
//O que é considerado Válido?
//Uma sequência de aparelhos é considerada válida se todas as chaves forem combinadas com a cinta correta.
//
//Exemplos
//"(){}[]" => True
//"([{}]) = > True
//"(}" => Falso
//"[(])" => Falso
//"[({})(](]" => Falso


function validBraces(braces){
  //TODO 
  let arr = braces.split('');
  let stack = [];
  let map = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
  }
  let len = arr.length;
  for(let i = 0; i < len; i++){
      let item = arr[i];
      if(item === '(' || item === '{' || item === '['){
          stack.push(item);
      }else{
          let last = stack.pop();
          if(item !== map[last]){
              return false;
          }
      }
  }
  if(stack.length !== 0){
      return false;
  }
  return true;
}



//Escreva uma função que leve uma sequência de aparelhos e determine se a ordem dos aparelhos é válida. Deve retornar verdadeiro se a sequência for válida, e falsa se for inválida.
//Este Kata é semelhante ao Valid Parheses Kata, mas introduz novos caracteres: suportes [], e chaves cacheadas {}. Graças a @arnedag pela ideia!
//Todas as cordas de entrada serão nonempty, e consistirão apenas de parênteses, suportes e chaves: ()[]{}.
//O que é considerado Válido?
//Uma sequência de aparelhos é considerada válida se todas as chaves forem combinadas com a cinta correta.
//Exemplos
//"(){}[]" => True
//"([{}]) = > True
//"(}" => Falso
//"[(])" => Falso
//"[({})(](]" => Falso

function validBraces(braces){
  //TODO 
  let arr = braces.split('');
  let stack = [];
  let map = {
      '(' : ')',
      '{' : '}',
      '[' : ']'
  }
  let len = arr.length;
  for(let i = 0; i < len; i++){
      let item = arr[i];
      if(item === '(' || item === '{' || item === '['){
          stack.push(item);
      }else{
          let last = stack.pop();
          if(item !== map[last]){
              return false;
          }
      }
  }
  if(stack.length !== 0){
      return false;
  }
  return true;
}




let listNumeros = [10,12,13,15,20,22,28,29,31]

function numeros(arr){
  let par = []
  let impares =[]
  for(let i = 0; i < arr.length; i++){
    if(arr[i]%2 ==0){
      par.push(arr[i])
    }else
    impares.push(arr[i])

  }
  if(par.length > impares.length){
    return cont(par, true) 
  }
  return cont(impares, false)
}

function cont(valorcont, verifiction){
  if(verifiction){
    return `A minha lista é par e o tamanho é  ${valorcont.length}`
  }
 return `A minha lista é Impar e o seu tamanho ${valorcont.length}`
}

console.log(numeros(listNumeros))





//Snail Sort
//Dado um conjunto n x n, devolva os elementos de matriz dispostos desde elementos externos até o elemento do meio, viajando no sentido horário.
//matriz = [[1,2,3],
//         [4,5,6],
//         [7,8,9]]
//caracol (matriz) #=> [1,2,3,6,9,8,7,4,5]
//Para melhor compreensão, siga os números da próxima matriz consecutivamente:
//matriz = [[1,2,3],
//         [8,9,4],
//         [7,6,5]]
//caracol (matriz) #=> [1,2,3,4,5,6,7,8,9]
//Esta imagem ilustrará as coisas com mais clareza:

snail = function(array) {
  var result = [];
  while(array.length) {
      result = result.concat(array.shift());
      for (var i = 0; i < array.length; i++) {
          result.push(array[i].pop());
      }
      result = result.concat((array.pop() || []).reverse());
      for (var i = array.length - 1; i >= 0; i--) {
          result.push(array[i].shift());
      }
  }
  return result;
}


//Philip acabou de fazer quatro anos e ele quer saber quantos anos ele terá em vários anos no futuro, como 2090 ou 3044. Os pais dele não conseguem 
//continuar calculando isso, então imploraram para ajudá-los escrevendo um programa que possa responder às intermináveis perguntas de Philip.
//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting 
//more curious every day he may soon want to know how many years 
//it was until he would be born, so your function needs to work with both dates in the future and in the past.
//Fornecer saída neste formato: Para datas no futuro: "Você é ... ano(s) de idade. Para datas no passado: "Você vai nascer em ... 
//ano(s)." Se o ano de nascimento é igual ao ano solicitado de volta: "Você nasceu este mesmo ano!"
//"..." devem ser substituídos pelo número, seguido e procedido por um único espaço. Lembre-se que você precisa prestar contas tanto por "ano" quanto por "anos", 
//dependendo do resultado.
//Boa sorte!



function calculateAge(yearOfBirth, currentYear) {
  const idade = currentYear - yearOfBirth;
  return idade < 0
    ? `You will be born in ${-idade} year${Math.abs(idade) === 1 ? "" : "s"}.`
    : idade === 0
    ? "You were born this very year!"
    : `You are ${idade} year${idade === 1 ? "" : "s"} old.`;
}


//Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, teremos 3, 5, 6 e 9. A soma desses múltiplos é 23.
//Termine a solução para que ela devosse a soma de todos os múltiplos de 3 ou 5 abaixo do número passado. Além disso, se o número for negativo, retorne 0 (para idiomas que os possuem).
//Nota: Se o número for um múltiplo de 3 e 5, conte-o apenas uma vez.
function solution(number) {
  var soma = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

console.log(solution(10));

//Você recebe uma matriz (que terá um comprimento de pelo menos 3, mas poderia ser muito grande) contendo inteiros. 
//A matriz é inteiramente composta de inteiros estranhos ou inteiramente compostos por inteiros, exceto por um único inteiro. 
//Escreva um método que tome a matriz como argumento e devore este "outlier".NN

function findOutlier(integers){
  let list = [];
  var list2 = [];
  for (let i = 0; i < integers.length; i++) 
  {
      if ((integers[i] % 2) == 0) 
      {
          list.push(integers[i]);
      } else 
      {
          list2.push(integers[i]);
      }
  }
  let n1 = list.length;
  let n2 = list2.length;

  if (n1> n2)
  {
      return list2[0];
  } else 
  {
      return list[0];
  }
}




//Os números de Fibonacci são os números na seguinte sequência de inteiros (Fn):
//
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//
//como
//
//F(n) = F(n-1) + F(n-2) com F(0) = 0 e F(1) = 1.
//
//Dado um número, digamos prod (para produto), pesquisamos dois números fibonacci F(n) e F(n+1) verificando
//
//F(n) * F(n+1) = prod.
//
//Seu produto de funçãoFib pega um inteiro (prod) e retorna uma matriz:
//
//[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
//dependendo do idioma se F(n) * F(n+1) = prod.
//
//Se você não encontrar dois F(n) consecutivos verificando você vai retornarF(n) * F(n+1) = prod
//
//[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
//F(n) sendo o menor, como .F(n) * F(n+1) > prod
//
//Alguns exemplos de retorno:
//(depende da linguagem)
//
//productFib(714) # should return (21, 34, true), 
//                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
//productFib(800) # should return (34, 55, false), 
//                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
//-----
//productFib(714) # should return [21, 34, true], 
//productFib(800) # should return [34, 55, false], 
//-----
//productFib(714) # should return {21, 34, 1}, 
//productFib(800) # should return {34, 55, 0},        
//-----
//productFib(714) # should return {21, 34, true}, 
//productFib(800) # should return {34, 55, false}, 
//Nota:
//Você pode ver exemplos para o seu idioma em "Testes de Exemplo".


function productFib(prod){
  const cache = {
    0: 0,
    1: 1
  }
  
  function fib(s){
    if(s == 0 || s == 1){return s;}
    if(s > 1){
      if(cache[s]){
        return cache[s];
      }else{
        cache[s] = fib(s - 1) + fib(s - 2)
        return fib(s - 1) + fib(s - 2);
      }
    }
  }
  
  let n = 0;
  while(fib(n) * fib(n + 1) < prod){
    n++;
  }
  if(fib(n) * fib(n + 1) == prod){
    return [fib(n), fib(n + 1), true]
  }else{
    return [fib(n), fib(n + 1), false]
  }
}


//Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, teremos 3, 5, 6 e 9. A soma desses múltiplos é 23.
//
//Termine a solução para que ela devosse a soma de todos os múltiplos de 3 ou 5 abaixo do número passado. Além disso, se o número for negativo, retorne 0 (para idiomas que os possuem).
//
//Nota: Se o número for um múltiplo de 3 e 5, conte-o apenas uma vez.
//
//Cortesia de projecteuler.net (Problema 1)

function solution(number) {
  var soma = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

console.log(solution(10));










