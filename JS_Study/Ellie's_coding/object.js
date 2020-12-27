
function print(shk){
    console.log(shk.name);
    console.log(shk.age);
}

//object 로 관리하는 법
const shk = { name : 'shk', age : 20}; // class 가 없어도 바로 만들수있다
print(shk);


const obj1 = {}; // object literal 
const obj2 = new Object(); // obejct constructor

//  Runtime : 프로그램이 동작하고 있을 때

shk.hasJob = true; // 오브젝트에 뒤늦게 추가할수있다
// 다른 언어에서는 쉽게 볼수있는건 아니다
// 가능한 피해서 코딩하면 좋다
// 물론 삭제도 된다
console.log(shk);
delete shk.hasJob;
console.log(shk.hasJob);

// object 는 key 와 value의 집합체이다
// obejct = {key : value }


// 2. Computed properties ( 계산된 프로퍼티 )
// properties 는 String 타입으로 받아와야 한다
console.log(shk.name) // 문법적으로 접근
// 코딩할땐 . 을 쓰는게 맞다
console.log(shk['name']) // 이렇게 배열로 접근 가능 
// 실기간으로 원하는 키값을 받아오고 싶을때 computed 를 사용한다.

shk['hasJob'] = true;

console.log(shk.hasJob);

function printValue(Obj, key){
    console.log(Obj, key);
}
printValue(shk, 'name');


// 3, property value shorthand
const person1 = { name : 'bob', age: 2 };
const person2 = { name : 'steve', age: 3 };
const person3 = { name : 'dave', age: 4 };

// const person4 =   또 쓰자니 아주 귀찮다
// 그래서 클래스를 만들어서 만들어보자

const person4 = Person('elile', 30)

function Person(name, age){
    this.name = name;
    this.age = age;
}

//5. in operator:
console.log('name' in shk);
console.log('age' in shk);
console.log('random' in shk);

//6 . for... in vs for of
// for ( key in obj)

for (key in shk){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,4,5];
for ( value of array){
    console.log(value);
}

//7. Fun cloning

const user = { name : 'ellie', age : '20'};
const user2 = user;

user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for ( key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// new way

// const user4 = {}
// Object.assign(user4, user);
//  ↓ 와 같다
const user4 = Object.assign({},user);
console.log(user4)

// 여러개의 소스도 전달 할 수 있다.
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
// 늦게 나온걸로 대체된다 
