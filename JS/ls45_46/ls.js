// document = DOM = Document Object Model

// window =   BOM = Browser Object Model



// let a = {
//     bb: true,
//     n: function () {
//         console.log(this.bb);
//     },
//     n1: () => {
//         console.log(this.bb);
//     }
// }


// // a.n();
// a.n1()


// console.log(this);
// console.log(window);


// let a1 = 4534534
// var a2 = 34534
// const a3 = 6565


// console.log('a1 let', a1);
// console.log('a2 var ', a2);
// console.log('a3 cosnt ', a2);


console.log(window);


// setTimeout(() => {
//     window.location.href = 'https://www.google.com.ua/'
// }, 5000)

// console.log(location);

// setTimeout(() => {
//     location.reload();
// }, 1000)

// console.log(history);


// console.log(window.navigator);


// console.log(window.navigator.language, window.navigator.storage);


// console.log(navigator.getBattery());

// navigator.getBattery().then(d => console.log(d))

console.log(navigator.deviceMemory);


// navigator.geolocation.watchPosition((data) => console.log(data))

// navigator.geolocation.getCurrentPosition 

const el = document.getElementById('rr')

// navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(data => {
//     console.log(data);

//     el.srcObject = data

//     el.play()
// })

