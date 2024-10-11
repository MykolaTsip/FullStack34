
let a = {
    name: 'dddd'
}

console.log(a);
document.write(a)


// let studentAName = 'Petro'
// let studentABirthdat = '1999'
// let studentAKnowgless = 'HTML/CSS'
// let studentAAge = 25
// let studentAIsDog = true


// studentAName = 'Vasyl'


let studentA = {
    name: 'Petro',
    birth: '1999',
    know: 'HTML/CSS',
    age: 25,
    isDog: true,
    car: {
        name: 'bmw',
        model: 'X5',
        wheel: 4,
        year: 2012,
        previousOwner: {
            name: 'Olena',
            age: 25,
            parents: {
                names: 'Vasyl Sofia',
            }
        }
    }
}

let studentB = {
    name: 'Vasyl',
    birth: '1989',
    know: 'HTML/CSS, JS, TS',
    age: 35,
    isDog: true
}



// console.log(studentA.isDog, studentA);
console.log(studentA.car.previousOwner.parents.names);

// let students = {
//     st1: null,
//     st2: null
// }

        //    0   1      2           3         4        5      6
let array = [ 1, null, undefined, 'dfsdf', 'sdfsdfsd', 5555, 'fsdfd' ]

console.log(array);
console.log(array[5], array[1]);



// let arr1 = [[[]], [[]], [[], []], [[]]]

let arr2 = [1, 2, ['dsfsd', ['dfsdfsd', null, [-1]]]]

console.log(arr2[2][1][2][0]);


