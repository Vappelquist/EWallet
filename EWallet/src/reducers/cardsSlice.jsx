import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'cards',
    initialState: {
        items: [
            {
                id: 1,
                number: '1234 1234 1234 1234',
                holder: 'TestHolder',
                expiry:'12/27',
                vendor: 'TestBank',
                ccv: '675'
            },
        ],
        activeCardId: 1,
    },
reducers:{
    cardAdded : (state, action) => {
        state.items.push(action.payload)
    },
    cardSetActive : (state, action) => {
        state.activeCardId = action.payload
    },
},
});


export const { cardAdded, cardSetActive} = cardSlice.actions;
export default cardSlice.reducer