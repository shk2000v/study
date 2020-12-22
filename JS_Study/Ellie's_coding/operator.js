// 1.String concatenation
console.log('my'+ ' cat')
console.log('1'+ 2)
console.log(`String literals:
''''
1+2 =${1+2}`);

console.log("ellie's \n\t book")

// 2.Numeric operators

let counter = 2;
console.log(counter);
const preInvrement = ++counter;
console.log(counter);
const postIncrement = counter++;
console.log(postIncrement,counter);

// Logical operators : 
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or : ${value1 || value2 || check()}`);

function check(){
    for ( let i = 0 ; i<10; i++){
        //wasting time
        console.log('크아악')
    }
    return true;
}

//7. Equality

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
// 타입을 신경쓰지않는다
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
// 타입을 신경써서 타입이 다르면 false
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);
// 그래서 보통의 경우는 둘을 비교할때 strict equality를 이용한다
console.log("==========================")
const shk1 = {name: 'shk'};
const shk2= {name: 'shk'};
const shk3 = shk1;

console.log(shk1 == shk2);
console.log(shk1 === shk2);
console.log(shk1 === shk3);

console.log("==========================")


console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 삼항 연산자
const name = 'ellie';
let name2 = 'shk';
console.log(name === 'ellie' ? 'yes' : 'No');
console.log(name2 === 'ellie' ? 'yes' : 'No');
console.log(name2 === 'shk' ? 'yes' : 'No');

let i =3 ;
while (i>0){
    console.log(`while : ${i}`);
    i--;
}

do {
    console.log(`do while : ${i}`);
    i--;
} while(i>0);