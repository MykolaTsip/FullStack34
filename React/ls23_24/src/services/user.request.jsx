import axios from 'axios';

export const getUsers = () => {

}


export const getUserbyId = async (id) => {

    // return fetch('https://jsonplaceholder.typicode.com/users/' + id);


    const json = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const user = await json.json();

    return user;
}


export const getUserbyIdByAxios = (id) => {


    return axios.get('https://jsonplaceholder.typicode.com/users/' + id);
}