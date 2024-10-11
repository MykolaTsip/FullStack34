
// test.js

let n1 = prompt()
let n2 = prompt()


function addator(a, b) {
    return a + b;
}


function minusator(a, b) {
    return a - b
}

addator(n1, n2)
minusator(n1, n2)


// test.test.js
// describe('Testing test file', () => {

//     it('aadator add suma', () => {
//         const a = 2;
//         const b = 2;
//         const result = a + b;

//         const addRes = addator(a, b);
//         expect(addRes).toEqual(result)
//     })
// })

let countPassed = 0;
let countFailed = 0;



{
    const a1 = 2;
    const a2 = 2;
    const result = a1 + a2;

    const addRes = addator(a1, a2);

    if (addRes === result) {
        console.log('Test passed');
        countPassed++;
    } else {
        console.error('Test failed');
        countFailed++;
    }
}



{
    const b = 3;
    const c = 3;
    const result = b - c;
    
    const minRes = minusator(b, c);

    if (result === minRes) {
        console.log('Test passed');
        countPassed++;
    } else {
        console.error('Test failed');
        countFailed++;
    }
}



console.log('Passed Tests: ', countPassed, ' Tests Failed: ', countFailed);