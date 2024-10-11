let countEl = Number(prompt('Enter count of cicles'));
let margin = prompt('Enter margin');
let lengthOfStr = Number(prompt('Enter length of string'))


const div = document.createElement('div');
div.id = 'root'
div.style.display = 'flex';
div.style.justifyContent = 'space-around';
div.style.flexWrap = 'wrap';

document.body.appendChild(div);


for (let i = 1; i <= countEl; i++) {
    const r =  Math.floor(Math.random()*256);
    const g =  Math.floor(Math.random()*256)
    const b =  Math.floor(Math.random()*256)


    const newEl = document.createElement('div')
    newEl.classList.add('wh');
    newEl.style.borderRadius = '150px';
    newEl.style.margin = margin.includes('px')
    ? margin
    : margin + 'px';
    newEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    let textOfEl = [];
    for (let j = 1; j <= lengthOfStr; j++) {
        const codeOfSymbol = 97 + Math.round(Math.random()*47);
        // console.log(codeOfSymbol, '00000');
        let symbolByCode = String.fromCharCode(codeOfSymbol);
        textOfEl.push(symbolByCode);

        // console.log(textOfEl);
    }

    console.log(textOfEl);
    newEl.innerHTML = `<h2> ${textOfEl.join('')} </h2>`

    // decodeURIComponent()

    div.appendChild(newEl);
}