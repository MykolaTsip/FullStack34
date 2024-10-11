

// function Person (name) {
//     let a = 5445;
//     this.fName = name;
//     this.lName = 'dfsdf';
//     this.age = 0;
// }


// let Oleg = new Person('Oleg') // {fName: 'Oleg', lName: 'dfsdf', age: 0}
// console.log(Oleg);

// let Ivan = new Person('Ivan');
// console.log(Ivan);


// let Animal = {
//     run: 60,
//     age: 10
// }

// console.log(Animal);


function Students(f_name, l_name, age, knowgless) {
    this.f_name = f_name
    this.l_name = l_name
    this.objAge = age
    this.know = knowgless


    this.addAge = function () {
        this.objAge += 1
    }
}


let Petro = new Students('Petro', 'dsfsd', 34, null)
console.log(Petro);

let Danylo = new Students('Danylo', 'sdfs', 43, 'HTML/CSS');
console.log(Danylo);

let Marko = new Students('Marko', 'fsdfsd', 10, 'html,css,js,ts' )
console.log(Marko);
Marko.addAge()
Marko.addAge()
Marko.addAge()

console.log(Marko);