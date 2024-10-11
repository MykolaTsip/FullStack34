
// let data = [
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
// 	{
// 		1: [1, 2, 3],
// 		2: [1, 2, 3],
// 		3: [1, 2, 3],
// 	},
//     {
//         2: [2, 2, 2, 2]
//     }
// ];



// function rahuvator(arrObj) {
//     let suma = 0;
//     for (let i = 0; i <= arrObj.length - 1; i++) {
//         let  keys = Object.keys(arrObj[i]); // [1, 2, 3]

//         for (let j = 0; j <= keys.length - 1; j++) {
//             //              keys[j] = 1
//             suma += arrObj[i][keys[j]].reduce((prVal, currVal) => prVal + currVal, 0)
//                 //    data[0][1]
//         }
        
        
//         suma += keys.reduce((prVal, currVal) => prVal + Number(currVal), 0) 
//     }

//     return suma;
// }


// let s = rahuvator(data);
// console.log(s);



const getUsers = new XMLHttpRequest();

console.log(getUsers);


getUsers.open('GET', 'https://jsonplaceholder.typicode.com/users');

console.log(getUsers);

getUsers.send()

console.log(getUsers);
console.log(getUsers.response);

getUsers.onload = function (data) {
    console.log(data);
    console.log(getUsers.response);
    let users = JSON.parse(getUsers.response);
    console.log(users);
   

    setUsersInHTML(users)
}


function setUsersInHTML(users) {
    const id = document.getElementById('root');
    
    
    users.forEach(user => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `id: ${user.id}. Name: ${user.name}, Email: ${user.email}`
        id.appendChild(newDiv);
    })
}





// /// // /// / /



fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        console.log(data)
        console.log(data.response);
        // console.log(data.json());
        return data.json()
        // return data.blob()
        // return data.text()
    })
    .then(res => {
        console.log(res)
        setUsersInHTML(res)
    })