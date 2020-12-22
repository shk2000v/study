'use strict';

// class : template
// object : instance of a class
// JavaScript classes
//     - introduced in ES6
//     - syntactical sugar over prototype-bases inheritance

// 문법만  약간 추가된 느낌 
// 언어구현상의 디테일 
// 그냥 클래스만 잘 이용하면 되긴 함


// 1. Class declarations
class Person {
    //constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }
    //methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const shk = new Person('kimseunghwan', 20);
console.log(shk.name);
console.log(shk.age);
shk.speak()

//2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){
        return this._age;
    }
    set age(value){// 값을 설정하기 때문데 value 를 받아와야 한다
        // if (value<0){
        //     throw Error('age can not be negative');
        // } // 이렇게 공격적으로 경고를 내도 좋고
        // 삼항 연산자를 통해 결과값을 다르게 유도 할수있다
        
        // this._age = value;
        this._age = value < 0? 0: value;
    }

}

const user1 = new User('Steve', 'Job', -1);
const user2 = new User('kim', 'seunhwan', 28);
console.log(user1.age);
console.log(user2.age);

//3. Fields (public, private)
// Too Soon!
class Experiment{
    publicField = 2; // 외부에서 읽고 변경가능
    #privateField = 0;
     // #을 붙이면 class 외부에서는 읽을수도 변경 할수도 없다
}
const experiment = new Experiment();
console.log(experiment.publicField); //2 
console.log(experiment.privateField); // 보안떔에 undefined로 보임


// 4. Static properties and methods
// static 을 붙이면 오브젝트와 상관없이 class 자체에 연결되어진다

class Aritcle{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Aritcle.publisher);
    }
}

const article1 = new Aritcle(1);
const article2 = new Aritcle(2);


console.log("===============================");
console.log(article1.publisher);
console.log(Aritcle.publisher);
Aritcle.printPublisher();

console.log(article1.articleNumber);

// 상속과 다양성
// 공통적인 부분으로 재사용 하기위해 사용
// 도형을 만들기 위해선
// 도형의 공통점? shape


// 5. inheritance
// a way for one class to extend another class.
class Shape{
    constructor(width , height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{
    // 필요한 함수만 재정의 해서 사용할수 있다
}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('▲');
    }
    getArea(){
        return (this.width * this.height)/2 ;
    }
}



const rectangle = new Rectangle(20,20,'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20,20,'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking instancOf
// a instancof b
// a 는 b 냐? 인걸 물어보는 boolean
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);//부모한테 상속되어있어서 가리켜도 ㅇㅋ
console.log(triangle instanceof Object);// JS의 모든 스크립트는 Object를 상속받은것
console.log(triangle.toString())


// https://developer.mozilla.org/ko/docs/Web/JavaScript
// 자바스크립트를 참조할땐 최신기술을 참조할수있는 사이트

