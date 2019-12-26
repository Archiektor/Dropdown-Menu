// OBJECT DESCRIPTOR

const car = {
    brand: 'Volvo',
    year: '2019',
    get age() {
        return `Car has been prduced in ${this.year}`;
    },
    set age(value) {
        this.year = value;
    },
};

// Object.defineProperty(car, 'year', {
// Object.defineProperty(car, 'age', {
//     // configurable: false,
//     // enumerable : false,
//     // writable: false,
//     // get: function () {
//     //     return `Car has been prduced in ${this.year}`;
//     // }
// });

Object.defineProperty(window, 'globalVar', {
    set: function (value) {
        console.log(value);
        debugger;
    }
});

function foo() {
    globalVar = 10;
}