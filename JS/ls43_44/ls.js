
const tagDiv = document.getElementsByClassName('kub')[0];

// console.log(tagDiv);


const getText = document.getElementById('dd');

tagDiv.onclick = () => {
    console.log(Math.random());
    
    if (getText.style.color === 'green') {
        getText.style.color = 'red'
    } else {
        getText.style.color = 'green'
    }
}


let count = 0;

function byClickOnID () {
    ++count;
    const kub = document.createElement('div');
    kub.style.width = '100px'
    kub.style.height = '100px'
    kub.style.margin = '10px'
    kub.style.backgroundColor = 'red'
    kub.innerText = count


    getText.appendChild(kub)
}



// 

const text = document.getElementsByClassName('text')[0];

// text.oncopy = (event$) => {
//     // event$.preventDefault()
//     console.log(event$, event$.target.value);
//     console.log('Your copied text !');

// }



// text.onmousemove = (event$) => {
//     console.log(22222, event$);


//     let r = Math.round(event$.clientX / 10);
//     let g = Math.round(event$.clientY / 10);
//     let b = Math.round(Math.random()*256);

//     text.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
// }


// text.onmouseenter = () => {
//     console.log(2222);
// } 


// text.onmouseleave = () => console.log(4555555);


// text.onmousedown = () => console.log('onmousedown');


// text.onmouseup = () => console.log('onmousedown');


// const inp = document.querySelector('input[type="text"]')

// console.log(inp);
// inp.onkeydown(() => {
//     console.log(2222);
// })

// function onTypeText (event$) {
//     console.log(2222, event$);
// }

const dd = document.getElementById('rrr');
// dd.onchange = (event) => {
//     console.log(222, event, event.target.value);
// }


// dd.onkeydown = (event) => {
//     console.log(222, event, event.target.value);
// }


// dd.oninput = (event) => {
//     console.log(222, event, event.target.value);
// }


dd.addEventListener('click', () => {
    console.log('dsfsdfsd');
} )

// addEventListener('click', dd, () => {
//     console.log(2222);
// })


// addEventListener('click', () => {
//     console.log(2222);
//     console.log(user);
// }, dd)


// const ee = document.getElementById('eee');
// const aa = document.getElementById('aaa');

// let user = {

// }

// ee.addEventListener('oninput', (event) => {
//     console.log(event.target.value);
//     user.p = event.target.value
// })

// aa.addEventListener('oninput', (event) => {
//     console.log(event.target.value);
//     user.l = event.target.value
// })


// console.log(document.forms.firstForm);


// console.log(document.forms.firstForm.values);



const j = document.getElementById('jjj');


j.onclick = () => {
    console.log(document.forms.firstForm);


    const user = {
        name: document.forms.firstForm.name.value,
        password: document.forms.firstForm.pass.value,
        repassword: document.forms.firstForm.repass.value,
        age: document.forms.firstForm.age.value
    }

    console.log(user);
}



