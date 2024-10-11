import { createSlice } from '@reduxjs/toolkit';



const count = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        plus: store => store + 1,
        minus: store => store - 1,
        setZero: () => 0
    },
    // action: {
    //     plusAction: () => ({type: 'PLUS'})
    // }
});


export const { plus, minus, setZero  } = count.actions;

export default count.reducer