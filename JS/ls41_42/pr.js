



let myClass = document.createElement('div', {
    class: 'my-class', 
    // innerHTML: 'sdfsd sdfsdf sdgsd', 
    // style: {
    //     width: '200px',
    //     height: '200px',
    //     backgroundColor: 'red',
    //     borderRadius: '50px',
    // }
});

myClass.innerHTML = 'sdfsd sdfsdf sdgsd'
myClass.style.width = '200px';
myClass.style.height = '200px';
myClass.style.backgroundColor = 'red';
myClass.style.borderRadius = '250px';
myClass.style.padding = '80px'


// document.body.appendChild(myClass)

let body = document.getElementsByTagName('body')[0]
body.appendChild(myClass)
console.log(body);


// let arr1 = [13, 3, 4, 34];
// console.log(arr1[1]);
