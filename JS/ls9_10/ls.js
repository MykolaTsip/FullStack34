
let a = [1, 2, 4, null, 'dfdsfsd', 'dd', true, false, 555, 0, 33];


//  Лінійний пошук
const foundValue = 555;

for (let i = 0; i <= a.length - 1; i++) {
    console.log(i);

    if (a[i] === foundValue) {
        console.log('Element FOUND!!!!', i, a[i]);
        break;
    }
}


// Бінарний пошук

let counter = 0;
const foundNum = 888;

let b = [0, 2, 4, 10, 11, 12, 13, 15, 17, 18, 20, 23, 55, 65, 70, 90, 111, 122, 222, 333, 555, 666, 777, 888, 999, 1000, 1001, 1002];


let start = 0;
let end = b.length - 1;

let middle;

while (start < end) {
    counter++;
    middle = Math.round((start + end) / 2);

    if (b[middle] === foundNum) {
        console.log('I Element FOUND!!!!', middle, b[middle], 'count: ', counter);
        break;
    } else if (b[middle] > foundNum) {
        end = middle - 1
    } else if (b[middle] < foundNum) {
        start = middle + 1
    }
}





// Сортування бульбашкою

let c = [10, 0, 100, 15, 11, 20, 9, 2, 5];
console.log(c);

let countB = 0;
let countB1 = 0


// i++ === i = i + 1
// i + 1 === 0 + 1

for (let j = 0; j <= c.length -1; j++) {
    for(let i = 0; i <= c.length - 1; i++) {
        countB++
        if (c[i] > c[i+1]) {
    
            let temp = c[i]
            c[i] = c[i+1];
            c[i+1] = temp;
        }
    }
}

console.log(c, countB);


for (let j = 0; j <= c.length -1; j++) {
    for(let i = 0; i <= c.length - 1; i++) {
        countB1++
        if (c[i] < c[i+1]) {
    
            let temp = c[i]
            c[i] = c[i+1];
            c[i+1] = temp;
        }
    }
}

console.log(c, countB1);