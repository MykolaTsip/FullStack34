// Інкапсуляція

// public, private, protected

class Animal {
    height = 100
    weight = 70
    kind = 'Tiger'
    name = 'Koko' // protected
    age = 10 // private

    
    addAge() {
        this.age += 1;
    }
}

class Dog extends Animal {
    constructor() {
        super.name
    }

}


let Tiger = new Animal();
console.log(Tiger);

// Tiger.age // Error;
// Tiger.name // Error;



class A {

}


class B {
}


class C {
    classb = new B(); // Композиція
}

let aaa = new A(new B()) // Агрегація
