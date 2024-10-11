
// class Counter {
//     // private
//     count = 0;

//     addNum(num = 0) {
//         this.count += num;
//     }

//     minNum(num = 0) {
//         this.count -= num;
//     }

//     // newNum(newNum) {
//     //     this.count = newNum;
//     // }

//     set newNum(number) {
//         this.count = number
//     }

//     // getCount() {
//     //     return this.count;
//     // }

//     get Count() {
//         return this.count
//     }
// }

// let myCount = new Counter();

// // console.log(myCount.getCount());
// // myCount.addNum(1);
// // myCount.addNum(111);
// // myCount.addNum(20);

// // myCount.newNum(444)

// // console.log(myCount.getCount());

// console.log(myCount.Count);


// myCount.newNum = 1000;
// console.log(myCount.Count);




class Home {
    table = 'dsgsg'
    floor = 'sdfsdfsd'


    static phone = 1111


    static logHello() {
        console.log('Hello world');
    }
}


console.log(Home.phone);
Home.logHello();

console.log(new Home().phone);
console.log(new Home().logHello());


