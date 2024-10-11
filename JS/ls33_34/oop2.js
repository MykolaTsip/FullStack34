// Поліморфізм

// Polimorf => poli morf => багато форм
class Car {

    constructor(model = null) {
        this.model = model;
    }

    drive() {
        console.log('I drive, my model is: ' + this.model);
    }
}


class sportCar extends Car {

    drive() {
        console.log('I drive so FAST Ps: ' + this.model);
    }
}

class electroCar extends Car {

    drive() {
        console.log('I drive using not much energy, my name is: ' + this.model);
    }
}


class varCar extends Car {

    drive() {
        console.log('i drive with huge weight, I VAR');
    }
}


let car1 = new sportCar('Bugatti');
let car2 = new electroCar('X');
let car3 = new varCar();

const arrCars = [car1, car2, car3]
// car1.drive()
// car2.drive()
// car3.drive()


arrCars.forEach(el => el.drive());

