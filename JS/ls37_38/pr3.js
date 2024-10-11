// Створити клвс Person, В нього мають бути поля: name, age, job також в нього буде метод doOwnWork.
// Використовуючи поліморфізм реалізувати класи 
// Programmer, Driver, Teacher - кожний клас повинен приймати свою форму поліморфізму для методу doOwnWork

class Person {
    name = '';
    age = 0;
    job = '';

    constructor(n, a, j) {
        this.name = n;
        this.age = a;
        this.job = j;
    }

    doOwnWork () {
        console.log('I do own work');
    } 
}


class Programmer extends Person {

    constructor(n, a, j) {
        super(n, a, j);
        this.name = n;
        this.age = a;
        this.job = j;
    }

    doOwnWork() {
        console.log('I do my work writing code');
    }
}

class Driver extends Person {

    constructor(n, a, j) {
        super(n, a, j);
        this.name = n;
        this.age = a;
        this.job = j;
    }

    doOwnWork() {
        console.log('I do my work by driving');
    }
}


class Teacher extends Person {

    constructor(n, a, j) {
        super(n, a, j);
        this.name = n;
        this.age = a;
        this.job = j;
    }

    doOwnWork() {
        console.log('I do my work teaching people');
    }
}



const person1 = new Programmer('Pavlo', 33, 'IT');
const person2 = new Driver('Vasyl', 30, 'Bus driver');
const person3 = new Teacher('Ira', 25, 'English teacher');


const arrPeople = [person1, person2, person3];

arrPeople.forEach(person => person.doOwnWork());