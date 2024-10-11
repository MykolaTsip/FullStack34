

// var a = 10

function stateUser() {
    let age = 18;

    function addAge() {
        age += 1;
    }

    function clearAge() {
        age = 18;
    }

    function getAge() {
        return age
    }

    return {
        addAge,
        getAge,
        clearAge
    }
}

let objState = stateUser(); // 

// {
//     function addAge() {age += 1;}
//     function clearAge() {age = 18;}
//     function getAge() {return age}
// }


console.log(objState.getAge());
objState.addAge();
console.log(objState.getAge());
objState.addAge();
console.log(objState.getAge());
objState.addAge();
console.log(objState.getAge());
// objState.clearAge()
console.log(objState.getAge());

let ob1 = stateUser();
ob1.addAge()
console.log(ob1.getAge());
console.log(objState.getAge());



