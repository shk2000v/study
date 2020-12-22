// 1. Function declaration
// function name(param1, param2) { body... return;}
// 하나의 함수는 한개만(one function === one thing)
// nameing : doSomething, command, verb
//function is object in JS

function printHello(){
    console.log('Hello');
}
printHello()

function log(message){
    console.log(message);
}
log("hello")

// 자바스크립트엔 타입이 없다
log(1234);

// 2.Parameters
// object는 주소가 저장된다.

function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

// 3.Defualt parameters (added in ES6)
function showMessage(message, from = 'unknown' ){
    console.log(`${message} by ${from}` );
}
showMessage('Hi!');

//4. Rest Parameters(added in ES6)
function printAll(...args){ //... 을 붙이는 이것이 Rest Parameters
    for (let i=0; i<args.length; i++){
        console.log(args[i]);
    }
    // 위의 방법도 있지만 간단하게 아래도 가능
    for(const arg of args){ // arg에 있는 모든 값출력
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5.Local scope
let globalMessage = 'global'; //global variable
//밖에서는 안이 보이지 않고
// 안에서만 밖을 볼 수 있다.
function printMessage(){
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
}

printMessage()

// 6. Return a value
function sum(a,b){
    return a+b;
}

// 7. Early return , early exit
//bad
function upgradeUser(user){
    if (user.point <= 10) {
        return;
    } // 값이 안맞는경우 빨리 리턴하고 필요한 로직을 뒤로 쓴다
}

// first-class function

// Function expression

const print = function() { // 이렇게 함수에 이름이 없는걸 anonymous function 이라고 한다
    console.log('print');
};
print()
const printAgaing = print;
printAgaing()
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Calback function using function expression
function randomQuiz(answer, printYes, printNo){
    // 함수를 전달해서 상황에 맞는 함수를 부르는걸 콜백 함수
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const printYes = function(){
    console.log('yes!');
}
const printNo = function(){
    console.log('no!');
}
randomQuiz('wrong', printYes,printNo);
randomQuiz('love you', printYes,printNo);

//recursion(재귀)
// const printNo = function print(){
//     console.log('no!no!');
//     print();
// };

// Arrow function
// always anonymous
const simplePrint = function() {
    console.log('simplePrint!');
}


const simplePrint2 =() => console.log('simplePrint!');
const add = (a,b) => a + b;

const simpleMultiply = (a,b) => {
    //do something more
    return a*b;
}; // 이렇게 =>이후에도 {} 을 사용할수 있지만 return 을 해줘야 한다.

simplePrint2()
console.log(add(1,2))


// IIFE : Immediately Invoked Function Expression
(function hello() {
    console.log('IIFE');
})();
// ㄴ 이게 IIFE
// 함수를 호출하듯 함수를 바로바로 쓰고 싶을때 사용하는 놈
