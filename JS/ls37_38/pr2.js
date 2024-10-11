// Написати функцію конструктор Car яка має поля wheels, engine, year, speed 
// та має наступні методи stop, start. Якщо машина їде то має бути рандомна швидкість від 10 до 200,
//  якщо стоїть - то швидкість 0

// На основі цього завдання створити функцію конструктор varCar яка буде унаслідувати поведінку функції Car,
// у varCar повинно бути поле speedWithWeight і реалізувати окремий метод для цього поля


class Car {
    wheels
    engine
    year
    speed = 0

    constructor(wheels, engine, year) {
        this.wheels = wheels ?? 4;
        this.engine = engine ?? '2.0';
        this.year = year ?? 2010;
    }


    stop() {
        this.speed = 0;
    }

    start() {
        this.speed = 10 + Math.round(Math.random()*190);
    }

    // static hello() {
    //     console.log('hello');
    // }

    // static sss = 'dfsd'


    // get s() {
    //     return ''
    // }

    // set ss(d) {

    // }
}


// Car.hello()

// new Car().ss = 333;
// new Car().s

// const sportCar = new Car();
// console.log(sportCar);

// sportCar.start();
// console.log(sportCar);


class VarCar extends Car {

    speedWithWeight = 0;

    constructor(wheels, engine, year) {
        super(wheels, engine, year)
    }

    stopWehight() {
        this.speedWithWeight = 0;
    }

    startWeight() {
        this.speedWithWeight = 10 + Math.round(Math.random() * 100);
    }
}


const someCar = new VarCar();

console.log(someCar);
someCar.startWeight();

console.log(someCar);