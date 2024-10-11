
// const express = reqire('express');
// import { express } from 'express';
import express from 'express';
import cors from 'cors';
// const cors = require('cors')

const myBackendApp = express();

myBackendApp.use(cors())

    // console.log(2222);



    // document.write('ddddd')
    // prompt('ddd')
    // window
    // console.log(globalThis);


    // globalThis.

    myBackendApp.get('/', (req, res) => {
        console.log('hellow world');
        // res.
        res.send('dddd')
    })

    myBackendApp.get('/hello', (req, res) => {
        console.log('hellow world', req);
        // res.
        res.json({a: 11, b: 'HHHH'})
    })


    myBackendApp.listen(8000, () => {
        console.log('Started on port 8000');
    })