//1. Use strict
// added in ES5
// use this for Valina 
'use strict';

//2. Variable
// let (added in ES6)

let globalName = 'global name';
{
 let name = 'ellie';
 console.log(name);
 name = 'hello';
 console.log(name);
 console.log(globalName);   
}
console.log(name);
console.log(globalName);

//{{  var 쓰지마셈 }}
// console.log(age);
// age = 4;
// var age;
//  ㄴ var의 호이스팅 이라고 불리는것으로
{
    age = 4;
    var age;
}
console.log(age);

// 이런 기능을 쓸때 호환성을 봐야한다
// 정말 필요하면 BABEL을 이용하여 ES6로 개발하면 된다.

//3. Constancts
// immutable data(변경 불가 데이터) Type
// 값을 한번 할당하면 절대 바뀌지않는 값(상수)
// 보안상의 이유로 사용할때 가능
// -thread safety  다양한 스레드들이 변수에 접근할때 동시에 값을 변경할수있는데
// 변경될 이유가 없다면 const 를 이용해서 선언하는게 실수방지에 도움을 준다
// - 

// Mutable - let // Immutable  - const

const daysInWeek = 7;
const maxNumber = 5;


//4. Variable types

// Primitive type 더이상 나눠질수없는 가장 작은 단위
//   single item : ㄴ number, string, boolean , null, undefined , symbol
//  object = 싱글 아이템들을 여러개 묶어서 한단위로 한박스로 관리해줄수 있게 해주는것
//  function , first 

// let 은 Integer의 타입을 따로 선언하지 않아도 된다.
let aaaaa = 10;
let bbbbb = 2.01;

const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);
// 항상 연산할때 값이 Integer가 확실한지 확인하고 받아야한다.
// -2**45 ~ 2**53
// const bigInt = 0129999999999999999999999999999999999999999n;
// console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//boolean
// false : 0, null, undefineed, NaN , ''

// null != undefined
// null 은 값이 존재하지 않음
// undefined 값이 지정되지 않음

// symbol, create unique identifiers for objects
// 심볼의 경우 동일한 애들로 심볼을 만들었지만 두가지 경우는 다른경우다
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2); // false로 나옴
// 주어지는 스트링과 상관없이 고유한 식별자를 만들기 위해 사용된다
const gsymbol1 = Symbol.for('id'); 
const gsymbol2 = Symbol.for('id'); 
console.log(gsymbol1 === gsymbol2); // true

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// 5. Dynamic typing : dynamically typed language
// statically language 선언할때 어떤 타입인지 안하고

let text = 'hello';
console.log(text.charAt(0)); // 인덱스 0번째인 h가 출력된다

console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text = 5 - '7';
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
// console.log(text.charAt(0));  // 
// 런타임에서 타입이 결정나기 때문에 에러가 발생한다

// 이 다이나믹 타이핑때문에 타입스크립트가 나오게 된다

const shk = {name : 'shk', age : 20};
console.log(shk)
shk.age = 28;
console.log(shk.age)
