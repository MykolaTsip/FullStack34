// Написати функцію конструктор Car яка має поля wheels, engine, year, speed 
// та має наступні методи stop, start. Якщо машина їде то має бути рандомна швидкість від 10 до 200,
//  якщо стоїть - то швидкість 0
function Car (wheels, engine, year) {
    this.wheels = wheels ?? 4;
    this.engine = engine ?? '2.0';
    this.year = year ?? 2010; 
    this.speed = 0;


    // this.stop = function () { // // Bad practice
    // }

}


Car.prototype.stop = function () {
    this.speed = 0;
}

Car.prototype.go = function () {
    this.speed = 10 + Math.round(Math.random()*190)
}


// const myCar = new Car();
// console.log(myCar);

// myCar.go()
// console.log(myCar);


function varCar(wheels, engine, year) {
    this.wheels = wheels ?? 4;
    this.engine = engine ?? '2.0';
    this.year = year ?? 2010; 
    this.speed = 0;
    this.speedWithWeight = 0
}

varCar.prototype = Object.assign({}, Car.prototype);

varCar.prototype.stopWeight = function () {
    this.speedWithWeight = 0
};

varCar.prototype.goWeight = function () {
    this.speedWithWeight = 10 + Math.round(Math.random()*100)
}



const newVarCar = new varCar();
console.log(newVarCar);

newVarCar.goWeight();
console.log(newVarCar);
