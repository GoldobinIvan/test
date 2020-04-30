/**
 * Объекты и классы
 */

// let myObj = {};
// console.log(myObj);
// console.log(typeof myObj);

// let str = 'n';
// str += 'ame'
// console.log(person[str]);
// console.log(person[str]);

/**
 * Цикл
 */

// let obj = {
//     p1: 1,
//     p2: 11,
//     p3: 111,
// }

// for (let key in obj) {
//     console.log(`${key} = ${obj[key]}`);
// }

// obj.someKey = 'some val';
// obj['someAnotherKey'] = 'some val 2';
// console.log(obj);

// /**
//  * Есть ли свойство у объекта?
//  */
// console.log('name' in person);

/**
 * Методы объектов
 */


// let person = {
//     name: 'Vasya',
//     surname: 'Ivanov',
//     pasport: {
//         seria: '1111',
//         number: '1111111'
//     },
//     sayHello: function() {
//         console.log('hello ' + this.name);
//     }
// }
// person.sayHello();

/**
 * get / set
 */

// let point = {
//     _x: 10,
//     _y: 100,
//     get x() {
//         return this._x
//     },
//     get y() {
//         return this._y
//     },
//     get sum() {
//         return this.x + this.y
//     },
//     getSum: function() {
//         return this._x + this.y
//     },
//     set xVal(val) {
//         this.x = val * 10;
//     }
// }
// console.log(point.sum);
// console.log(point.getSum());
// point.xVal = 20;
// console.log(point);
/**
 * Старый синтаксис
 */
// function Person(name, surname) {
//     this.name = name;
//     this.surname = surname;
// }

/**
 * Классы
 */

// class Person {
//     constructor(name = Person.getDefaultStr(),
//         surname = Person.getDefaultStr()) {
//         this.name = name;
//         this.surname = surname;
//         this.invaited = false;
//         Person.count++;
//     }
//     toggleInvaited() {
//         this.invaited = !this.invaited;
//     }
//     static getDefaultStr() {
//         return '-';
//     }
// }
// Person.count = 0;
// let user = new Person('Vasya', 'Ivanov');
// let user1 = new Person();
// user.toggleInvaited();

// // console.log(user);
// // console.log(user1);
// // console.log(Person.count);
// // console.log(typeof Person);

// class MyWorker extends Person {
//     constructor(name, surname, id) {
//         super(name, surname),
//             this.id = id;
//     }

//     toggleInvaited() {
//         this.invaited = !this.invaited;
//         console.log(this.invaited);
//     }
// }
// let some = new MyWorker('Vasya', 'Ivanov', '007');
// some.toggleInvaited();
// console.log(some);

// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     getDistance(point) {
//         // return Math.pow(this.x,2) - Math.pow(point.x,2)
//     }
// }

// class Line {
//     constructor(pnt1, pnt2) {
//         this.point1 = pnt1;
//         this.point2 = pnt2;
//     }
//     getLenght() {
//         return this.point1.getDistance(this.point2)
//     }
// }