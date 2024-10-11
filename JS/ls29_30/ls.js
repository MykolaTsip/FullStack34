
function Person(name) {
    let go = ' - Cant';

    function startGo() {
        go = ' + Can';
    }

    function stopGo() {
        go = ' - Cant'
    }

    function getGoInfo() {
        return name + go + ' GO';
    }


    return {
        startGo,
        stopGo,
        getGoInfo
    }
}

let Petro = Person('Petro');

console.log(Petro.getGoInfo());
Petro.startGo();
console.log(Petro.getGoInfo());
Petro.stopGo();
console.log(Petro.getGoInfo());


let Vasya = Person('Vasya')
console.log(Vasya.getGoInfo());

let age = 200;

let RRR = {
    name: 'Ivan',
    age: 18,
    addAge: function () {
        console.log(222);
        // console.log(Ivan.age);
        console.log(this);
        console.log(this.age, this.name);
    }
}



// console.log(Ivan);
// console.log(Ivan.name, Ivan.age);
// Ivan.addAge()

let Varonika = Object.assign({}, RRR);
console.log(RRR);
RRR.addAge()


// console.log(this);