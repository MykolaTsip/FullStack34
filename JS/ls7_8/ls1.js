let array = [ 1, null, undefined, 'dfsdf', 'sdfsdfsd', 5555, 'fsdfd', 222, 444, 111 ];


for (let i = 0; i <= array.length -1; i++) {
    console.log(i);

    if (array[i] === 5555) {
        console.log('I found ELMENT!', i, array[i]);
        break;
    }
}


console.log('----------');

let a = Number(prompt('Enter number')); // 5
let b = Number(prompt('Enter number 2 ')); // 50


for (let n = 0; n <= 100; n++) {

    if (a <= n && n <= b) { // 5 - 50 
        continue;
    }
    
    console.log(n);
}
