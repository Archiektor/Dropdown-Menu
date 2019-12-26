// 1. Introductions to functions

/*
// Function Declaration
function sayHello(firstName = "Default", lastName = "Default") {
    if (!firstName || !lastName) {
        return console.error('error');
    }
    return `Hello ${firstName} ${lastName}`;
}

let res1 = sayHello('Nikki', 'Odd');
console.log(res1);

let res2 = sayHello('Abraham');
console.log(res2);

// Function Expression
const square = function (x) {
    return x * x;
};

console.log(square(5));

// Self-calling function

(function (msg) {
    console.log(msg);
})("Puck go sleep");
*/

// 2. Array Methods

/*const numArr = [3, 434, 0, 2323, 11];

let value;

value = Array.isArray(numArr);

value = numArr.indexOf(0);
// add/delete elements from arrays
value = numArr.push(100);

value = numArr.pop();

value = numArr.unshift(111);

value = numArr.shift();

//cut elemetns from names

value = numArr.slice(0, 2);

value = numArr.splice(1, 0, 'one', 'two');

// value = numArr.reverse();

value = numArr.concat(6, 5);

value = numArr.join(', ');

value = 'helloworld'.split('');

console.log(value, numArr);
*/

//Higher order functions

const names = ['Nikki', 'Denis', 'Olga', 'Happy'];

//[5,5,4,5]

function mapArray(arr, fn) {
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(fn(arr[i]));
    }

    return res;
}

function showLength(el) {
    return el.length;
}

function showUpper(el) {
    return el.toUpperCase();
}

const result = mapArray(names, showLength);
const result2 = mapArray(names, showUpper);

// console.log(result2);

function greeting(firstName) {
    return function (lastName) {
        return `Hello, ${firstName} ${lastName}`;
    }
}

// const testGreeting = greeting('Nikki');
// const fullName = testGreeting('Odd');

const fullName = greeting('Nikki')('Odd');

// console.log(fullName);

let numbers = [1, 2, 3, 4, 5, 6];


function isEven(x) {
    return x % 2 === 0;
}

// let evenNumbers = numbers.filter(isEven); !!! How can filter work
let evenNumbers = function (arr) {
    let newNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            newNumbers.push(arr[i]);
        }
    }
    return newNumbers;
};

// console.log(evenNumbers(numbers));
//2 4 6

// let a = 0 && 'string';

// console.log(a);

//TASK 1
/*
let newValue = makeSmth(['my', 'name', 'is', 'Trinity'], strHandler);
let newValue1 = makeSmth([10, 20, 30], numHandler);
let newValue2 = makeSmth([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], objHandler);
let newValue3 = makeSmth(['abc', '123'], smthHandler);


function makeSmth(arr, fn) {
    let newStr = 'New value: ';
    newStr += arr.map(fn).join('');
    return newStr;
}

function strHandler(item) {
    let firstPart, secondPart;
    firstPart = item.slice(0, 1);
    secondPart = item.slice(1, item.length);
    return firstPart.toUpperCase() + '' + secondPart;
}

function numHandler(item) {
    return item * 10;
}

function objHandler(item) {
    return `${item['name']} is ${item['age']} `;
}

function smthHandler(item) {
    return item.split("").reverse().join("");
}

// console.log(newValue);
// console.log(newValue1);
// console.log(newValue2);
// console.log(newValue3);

//TASK 2

function everyElem(arr, fn) {
    let isEvery;
    if (Array.isArray(arr) && typeof fn === 'function') {
        for (let i = 0; i < arr.length; i++) {
            isEvery = fn(arr[i]);
            if (!isEvery) {
                break;
            }
            // console.log('next step');
        }
    } else {
        console.log('Bad arr or fn');
    }
    return isEvery;
}

function checkElem(num) {
    return num >= 5;
}

console.log(everyElem([7, 11, 22, 334], checkElem));
*/

// THIS CONTEXT
/*
function getPrice(currency = '$ ') {
    console.log(currency + this.price);
    return this;
}*/

/*const prod1 = {
    name: 'Intel',
    price: 100,
    getPrice,
    getName() {
        console.log(this.name);
        return this;
    },
    info: {
        information: ['2.3ghz'],
        getInfo: function () {
            console.log(this);
            return this;
        }
    }
};

// prod1.getPrice();
// prod1.info.getInfo();

const prod2 = {
    name: 'AMD',
    price: 70,
    getPrice
};

// prod2.getPrice();

prod2.getName = prod1.getName;

// prod2.getName();

const prod3 = {
    name: 'ARM',
    price: 200,
    // getPrice
};

// prod3.getName = prod1.getName;

// prod3.getName().getPrice();

// !! Intrestning function CALL
// getPrice.call(prod3, '% ');

// !! Intrestning function APPLY
// getPrice.apply(prod3, ['$ ']);

// TASK 1

const rectangle = {
    width: 150,
    height: 200,
    getSquare: function () {
        return this.width * this.height;
    }
};

console.log(rectangle.getSquare());

function getPrice() {
    return this.price;
}

function getPriceWithDiscount() {
    return (this.price - this.price * (parseFloat(this.discount) / 100));
}

// TASK 2

const priceObj = {
    price: 20,
    discount: '20%',
    getPrice,
    getPriceWithDiscount
};

// console.log(`price without discount will be : ${priceObj.getPrice()}`);
// console.log(`price with discount will be : ${priceObj.getPriceWithDiscount()}`);

// TASK 3

const highObj = {
    height: 200,
    increaseHeight: function () {
        return (this.height += 1);
    }
};

// console.log(`current height = ${highObj.height}`);
// highObj.increaseHeight();
// console.log(`current height = ${highObj.height}`);
// highObj.increaseHeight();
// console.log(`current height = ${highObj.height}`);

// TASK 4

const calculator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plus: function () {
        this.value += 1;
        return this;
    },
    minus: function () {
        this.value -= 1;
        return this;
    }
};

console.log(`current value = ${calculator.value}`);
calculator.double().plus();
console.log(`current value = ${calculator.value}`);
calculator.double().plus().minus();
console.log(`current value = ${calculator.value}`);
*/
// !!! ARRROW fUNCTIONS

const plus = (x = 0, y = 0) => x + y;

// THE SAME
/*function plusFun(x, y) {
    return x + y;
}*/

const withoutArg = () => console.log('Hello World!');
const singleArg = x => x * 2;
// !!! But when default use brackets (x = 1)
// console.log(singleArg(2));

// console.log(plus());

const moreActions = (a, b) => {
    a *= 2;
    b *= 3;
    // !!! say return
    return a + b;
};

//Return Objects

const returnObj = (str = '') => {
    return {
        value: str,
        length: str.length
    }
};

// THE SAME

const returnObj1 = (str = '') => ({
    value: str,
    length: str.length
});

//HomeTask Arrow fUNCTIONS

//TASK 1

const sum = (...props) => {
    // const params = Array.prototype.slice.call(props);
    if (!props.length) return 0;

    return props.reduce((prev, next) => prev + next);
};

// Переберающие методы

//forEach
//filter
//map
//reduce
//some/every
//sort
//find

const users = [
    {
        _id: "5cdce6ce338171bb473d2855",
        index: 0,
        isActive: false,
        balance: 2397.64,
        age: 39,
        name: "Lucile Finley",
        gender: "female",
        company: "ZOXY",
        email: "lucilefinley@zoxy.com",
        phone: "+1 (842) 566-3328",
        registered: "2015-07-12T09:39:03 -03:00"
    },
    {
        _id: "5cdce6ce0aa8d071fa4f4cc5",
        index: 1,
        isActive: true,
        balance: 2608.48,
        age: 33,
        name: "Woodward Grimes",
        gender: "male",
        company: "FORTEAN",
        email: "woodwardgrimes@fortean.com",
        phone: "+1 (960) 436-3138",
        registered: "2014-09-08T03:24:39 -03:00"
    },
    {
        _id: "5cdce6ce103de120d32d6fe4",
        index: 2,
        isActive: true,
        balance: 1699.99,
        age: 25,
        name: "Robinson Coleman",
        gender: "male",
        company: "GENMOM",
        email: "robinsoncoleman@genmom.com",
        phone: "+1 (852) 543-3171",
        registered: "2019-04-23T08:24:58 -03:00"
    },
    {
        _id: "5cdce6cebada7a418d8ccb3d",
        index: 3,
        isActive: true,
        balance: 2621.84,
        age: 25,
        name: "Austin Benton",
        gender: "male",
        company: "ZILIDIUM",
        email: "austinbenton@zilidium.com",
        phone: "+1 (977) 573-2627",
        registered: "2016-08-02T10:08:24 -03:00"
    },
    {
        _id: "5cdce6ced81fe99596d9cef5",
        index: 4,
        isActive: true,
        balance: 1297.31,
        age: 37,
        name: "Casandra Stout",
        gender: "female",
        company: "ANACHO",
        email: "casandrastout@anacho.com",
        phone: "+1 (929) 465-3804",
        registered: "2018-04-14T11:27:26 -03:00"
    },
    {
        _id: "5cdce6ce6c3ae6c4d6f39e88",
        index: 5,
        isActive: false,
        balance: 2165.49,
        age: 20,
        name: "Valencia Carrillo",
        gender: "male",
        company: "XEREX",
        email: "valenciacarrillo@xerex.com",
        phone: "+1 (977) 522-3378",
        registered: "2014-02-14T11:45:27 -02:00"
    }
];

//forEach
// users.forEach((newUser, index, arr) => {
// //         console.log(newUser, index, arr);
// //     }
// // );

//fILTER
const usersLess30 = users.filter(user => user.age < 30);
const activeUsers = users.filter(user => user.isActive);

// console.log(activeUsers);

//MAP
const userNames = users.map((user) => user.name);
// console.log(userNames);
const userObj = users.map((user) => ({name: user.name, age: user.age, email: user.email}));
//THE SAME
const userObj1 = users.map((user) => {
    return {
        name: user.name,
        age: user.age,
        email: user.email
    }
});
// console.log(userObj);

//REDUCE
// const totalAmount = users.reduce((acc, newUser) => {
//     console.log(acc);
//     return (acc += newUser.balance);
// }, 0);

const totalAmount = users.reduce((acc, user) => (acc += user.balance), 0);
// console.log(totalAmount);

//Make Object of objects

const usersObj = users.reduce((acc, user) => {
    // console.log(acc[newUser.name]);
    acc[user._id] = user;
    return acc;
}, {});

// console.log(usersObj);


//SOME/Every

const isMale = users.some((user) => user.gender === 'male');
// console.log(isMale);

const isFemale = users.every((user) => user.gender === 'female');
// console.log(isFemale);

// FIND
const user = users.find((user) => user.name === "Valencia Carrillo");
// console.log(newUser);

// Sort
const strArr = ['Nikki', 'Anna', 'Bill'];
strArr.sort();
// console.log(strArr);

const numArr = [10, 7, 44, 22, 3];
numArr.sort((prev, next) => {
    // console.log(prev, next);
    return prev - next;
});
users.sort((prevUser, nextUser) => prevUser.age - nextUser.age);
// console.log(users);

// Переберающие методы HomeTask
/*
//TASK 1
const newArr = [1, 2, 3, 5, 8, 9, 10];

const modArr = newArr.map((number) => {
    return {
        digit: number,
        odd: number % 2 !== 0
    }
});

// console.log(modArr, Array.isArray(modArr));

//TASK 2

const newArr2 = [12, 4, 50, 1, 0, 18, 40];

const isZero = newArr2.some(item => item === 0);
//Если да - вернуть false.?? вернуть true
// console.log(isZero);

// TASK 3

const newArr3 = ['yes', 'hello', 'no', 'easycode', 'what'];

const isMoreThan3 = newArr3.some(item => item.length > 3);
// console.log(isMoreThan3);

// TASK 4

const newArr4 = [{char: "a", index: 12}, {char: "w", index: 8}, {char: "Y", index: 10}, {
    char: "p",
    index: 3
}, {char: "p", index: 2},
    {char: "N", index: 6}, {char: " ", index: 5}, {char: "y", index: 4}, {char: "r", index: 13}, {char: "H", index: 0},
    {char: "e", index: 11}, {char: "a", index: 1}, {char: " ", index: 9}, {char: "!", index: 14}, {
        char: "e",
        index: 7
    }];

const newArr5 = newArr4.sort((prevIndex, nextIndex) => prevIndex.index - nextIndex.index);
// console.log(newArr5);

const newStr = newArr4.reduce((acc, item) => (acc += item.char), '');

// console.log(newStr);

//SORT TASK 1

const sortArr = [[14, 45], [1], ['a', 'c', 'd']];

const sortArr1 = sortArr.sort((prevArr, nextArr) => prevArr.length - nextArr.length);

// console.log(sortArr1);

//SORT TASK 2

const sortArr2 = [
    {cpu: 'intel', info: {cores: 2, cache: 3}},
    {cpu: 'intel', info: {cores: 4, cache: 4}},
    {cpu: 'amd', info: {cores: 1, cache: 1}},
    {cpu: 'intel', info: {cores: 3, cache: 2}},
    {cpu: 'amd', info: {cores: 4, cache: 2}}
];

const sortArr3 = sortArr2.sort((prevObj,
                                nextObj) => prevObj.info['cores'] - nextObj.info['cores']);

// console.log(sortArr3);

//SORT TASK 3

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];

function filterCollection(arr, downPrice, upPrice) {
    products.sort((prevObj, nextObj) => prevObj.price - nextObj.price);
    // console.log(products);
    console.log(products.filter(item => (item.price > downPrice) && (item.price < upPrice)));
}

filterCollection(products, 15, 30);
*/

// CLOSURES
/*
function getFullName(firstName, lastName) {
    return function () {
        return `${firstName} ${lastName}`;
    }
}

const getName = getFullName('Nikki', 'Odd');

// console.log(getName());

function updateValue(val) {
    let x = val;
    // console.log(`x with value = ${x}`);
    return function (num) {
        return (x += num);
    }
}

const firstNumber = updateValue(5);

// console.log(firstNumber(-3));

function checkCredit() {
    const newUser = 'test';
    const password = 'somePassword';

    return {
        // checkLogin: function(value) {
        checkLogin(value) {
            return newUser === value;
        },
        // checkPassword: function(value) {
        checkPassword(pass) {
            return password === pass;
        }
    }
}

const check = checkCredit();
*/
/*
function closureExample() {

    const arrOfFunc = [];
    let value = '';

    for (let i = 0; i < 10; i++) {
        value += i;
        arrOfFunc.push(function () {
            console.log(value, i);
        })
    }
    // console.log(arrOfFunc);
    return arrOfFunc;
}

const res = closureExample();
// res[0]();
// res[5]();
console.dir(res);
 */

// !!!HABR EXAMPLES
// let a = 10;
//
// function app() {
//     let b = 2;
//     console.log(a); // 10
//     console.log(b); // 2
// }
//
// // console.log(b); //   ReferenceError: b is not defined
// app();

// let a = 10;
//
// function app() {
//     let b = 2;
//     let d = 3;
//
//     return function add() {
//         let c = a + b;
//     }
// }
//
// let x = app();
// console.dir(x);

// let a = 10;
// let startFunc;
//
// function app() {
//     let b = 2;
//
//     function add() {
//         let c = a + b;
//         console.log(c);
//     }
//
//     startFunc = add();
// }
//
// app(); // Invoke the app function
// console.log(startFunc);
// // as the app function invoked above will assign the add function to startFunc & console the value of c

// let a, b;
//
// {
//     a = 10;
//     b = 5;
// }
//
// console.log(a + b);

// HomeTask Closures
/*
// TASK 1

function minus(a = 0) {
    let firstNum = a;
    return (b = 0) => (a - b);
    // return function addSecond (b = 0) {
    // return (a - b);
}

// console.log(minus(10)(6));
// console.log(minus(5)(6));
// console.log(minus(10)());
// console.log(minus()(6));
// console.log(minus()());

// TASK 2

function multiplyMaker(a) {
    let firstNum = a;
    let counter = 0;
    return function (b) {
        if (counter !== 0) {
            counter = counter * b;
        } else {
            counter = a * b;
        }
        return counter;
    }
}

const multiply = multiplyMaker(2);

// console.log(multiply(2)); // 4 (2 * 2)
// console.log(multiply(1)); // 4 (4 * 1)
// console.log(multiply(3)); // 12 (4 * 3)
// console.log(multiply(10)); // 120 (12 * 10)

// TASK 3

const str = (function () {
    let newStr;

    function setStr(value = '') {
        if (typeof value == 'number') {
            newStr = `${value}`;
        } else {
            newStr = value;
        }
    }

    function getStr() {
        return newStr;
    }

    function getStrLength() {
        return newStr.length;
    }

    function getReverse() {
        return newStr.split('').reverse().join('');
    }

    return {
        setStr: setStr,
        getStr: getStr,
        getStrLength: getStrLength,
        getReverse: getReverse
    };
}());

// str.setStr(123);
// console.log(typeof (str.getStr()));
//
// str.setStr('abcde');
// console.log(str.getStr());
// console.log(str.getStrLength());
// console.log(str.getReverse());

// TASK 4

const calc = (function () {
    let value;

    function setValue(number = 0) {
        value = number;
        return this;
    }

    function getValue() {
        return value.toFixed(2);
    }

    function plus(number) {
        value += number;
        return this;
    }

    function minus(number) {
        value -= number;
        return this;
    }

    function multiply(number) {
        value *= number;
        return this;
    }

    function divide(number) {
        value /= number;
        return this;
    }

    function exponent(exp) {
        value = (Math.pow(value, exp));
        return this;
    }

    return {
        setValue: setValue,
        getValue: getValue,
        plus: plus,
        minus: minus,
        multiply: multiply,
        divide: divide,
        exponent: exponent
    };
}());

// calc.plus(5);
// calc.multiply(2);
// console.log(calc.getValue());

console.log(calc.setValue(10).exponent(2).getValue());
*/
// SOME METHODS Of OBJECTS

//Copy

let obj1 = {
    name: 'Nikki',
};

let obj2 = {
    age: 27,
};

let newObj = Object.assign({}, obj1, obj2);
//console.log(newObj);

let obj3 = {
    name: 'Cind',
    age: 35,
    skills: ['html', 'css', 'js']
};

newObj = JSON.parse(JSON.stringify(obj3));

// console.log(newObj);

let keys = Object.keys(obj3);
//console.log(keys);

let values = Object.values(obj3);
//console.log(values);

let entries = Object.entries(obj3);
//console.log(entries);

let fromEntries = Object.fromEntries([['a', 'a_value'], ['b', 'b_value']]);
//console.log(fromEntries);

// DESTRUCTURING

const newUser = {
    firstName: 'Nikki',
    lastName: 'Odd',
    age: 25,
    info: {
        work: 'EasyCode',
        skills: ['html', 'css', 'js']
    }
};

//ES 5
// const firstName = newUser.firstName;
// console.log(firstName);

//ES 6 Destro
const {firstName: name, lastName, age: years = 30} = newUser;
// console.log(name, years);

// const {info: {work, skills}} = newUser;
// console.log(work);
// console.log(skills);

//from ARRAY
const colors = ['purple', 'black', 'red'];

const [p, b, red] = colors;
// console.log(p, b, red);

const newNames = ['Nikki', 'Anna', 'Bul'];
const [, , name3] = newNames;
// console.log(name3);

const nestedArr = ['hello world', ['key', 'value']];
const [, [key, value]] = nestedArr;
// console.log(key, value);

const [name1, ...otherNames] = newNames;
// console.log(name1, otherNames);

const [...newNames2] = newNames;
// console.log(...newNames2);
// console.log(newNames2);

const colorsNames = ['default value', ...colors, ...newNames];
// console.log(colorsNames);

const {
    info: {
        skills: [html, css, js]
    }
} = newUser;

// console.log(html, css, js);

function myPerson({firstName = '&', lastName = '&', info: {work, skills}}) {
    console.log(skills);
}

// myPerson(newUser);

function foo(x, y, ...others) {
    // console.log(arguments);
    const [...args] = arguments;
    console.log(others);
}

// foo(3, 5, 7, 9);

// HomeTask DESTRUCTURING

//TASK 1
function splash(no1, ...arr) {
    return {
        first: no1,
        other: arr
    }
}

console.log(splash('a', 'b', 'c', 'd'));

//TASK 2

const organisation = {
    name: 'Google',
    info: {employees: ['Vlad', 'Olga'], partners: ['Microsoft', 'Facebook', 'Xing']}
};

function getInfo(obj) {
    const {name: n = 'Unknown', info: {partners: [child1, child2]}} = obj;
    console.log(`Name is : ${n} and partners are : ${child1} and ${child2}`);
}

getInfo(organisation);




