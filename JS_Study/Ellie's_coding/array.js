'uses strict'

// Array ★

//배열의 선언 방법
// 1. Declaration

const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['사과','바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[3]);// out of index = undefine

console.log(fruits[fruits.length - 1]);

console.clear()
//3 . Looping over an array
// a. for
for ( let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b.for
for (let fruit of fruits){
    console.log(fruit);
}

// c. forEach(forEach는 callback함수를 불러온다)
fruits.forEach((fruit) => console.log(fruit))

//4. Addtion, deletion, copy
// push : add an item to ten end
fruits.push('딸기','사과');
console.log(fruits)
//pop : remove an item form the end
fruits.pop();
fruits.pop();
console.log(fruits)

// unshift: add an item to teh benigging
fruits.unshift('딸기','레몬'); // 앞에서부터 들어간다
console.log(fruits)

// shift : removen an item form the benigging
fruits.shift();
fruits.shift();
console.log(fruits)

// note!! shift, unshift are slower than pop, push
// 시프트계열은 존나 느리다 
// pop, push를 이용하는게 속도 면에서는 우수
// 배열의 길이가 길면 실수록 더 느리다 당연하게도

console.log("===================");
//remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1,1 ); // 시작하는 인덱스 부터 : 지울 n 개
console.log(fruits);
fruits.splice(1,1,'사과', '수박' );// 바나나가 지워진 자리에   사과와 수박을 추가할수있다.
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('배'));

// includies
console.log(fruits.includes('코코넛'));

// lastindexof()
console.clear();
fruits.push('사과')
console.log(fruits)
console.log(fruits.indexOf('사과'))
console.log(fruits.lastIndexOf('사과'))