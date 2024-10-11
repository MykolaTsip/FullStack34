// DOM - Document Object Model

// let userText = prompt('Enter your text for site');
// document.write(userText);

// document.write('<h1> FSKfkdsjfksjdkglsd </h1>')


// console.log(document);
// console.log(document.body.header);

// let headerHTML = document.getElementsByTagName('header');
// console.log(headerHTML);

// let a = [1, 2, 3];
// console.log(a);

// let liHTML = document.getElementsByTagName('div');
// console.log(liHTML); 


// let classBl1 = document.getElementsByClassName('sec1');
// console.log(classBl1);


// let a1 = document.getElementById('ABOUT');
// console.log(a1);

// let nameDDD = document.getElementsByName('ddd');
// console.log(nameDDD);


// let navRoute = document.querySelector('div[class="navigation_route"]');
// let navRoute1 = document.querySelector('div[class]');

// console.log(navRoute1);


// let allDivClass = document.querySelectorAll('div[class]');
// console.log(allDivClass);

///////

// let h2 = document.getElementById('title');
// console.log(h2);

// // h2.innerText = userText;
// h2.innerHTML = userText



// h2.style.width = '200px'
// h2.style.height = '200px'
// // h2.style.backgroundColor = 'pink';

// // h2.style.backgroundColor = '#34ad33'
// // h2.style.fontSize = '100px'



// setInterval(() => {
//     let red =
//     let green = Math.round(Math.rand Math.round(Math.random()*256);om()*256);
//     let blue = Math.round(Math.random()*256);


//     h2.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`  // 'rgb(1, 2, 3)'
// }, 300)


let title_h2 = document.getElementsByClassName('title_h2');
// // console.log(title_h2);
// // setTimeout(() => {
// //     title_h2[0].classList.add('helloWorld')
// // }, 3000);


// let newTag = document.createElement('b');
// newTag.innerHTML = 'sdgsdgdsg dfsgs fdgfsd';
// newTag.id = 'MyID'
// newTag.style.color = 'blue'
// console.log(newTag);


// title_h2[0].appendChild(newTag)
// // title_h2.innerHTML = newTag.innerHTML


const countKub = +prompt('Enter number of kubs');



for (let i = 1; i <= countKub; i++) {
    
    const divKub = document.createElement('div');
    divKub.style.width = '100px';
    divKub.style.height = '100px';

    divKub.classList.add('sec_navigation')


    setInterval(() => {
        let r = Math.round(Math.random()*256);
        let g = Math.round(Math.random()*256);
        let b = Math.round(Math.random()*256);
    
        divKub.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        title_h2[0].appendChild(divKub)
    }, (1000 + Math.round(Math.random() * 1000)))
}