import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        incriment: (state) => {
            state.count = state.count + 1
        },
        decriment: (state,action) => {
            if (state.count > 3) {
                state.count = state.count - action.payload
            }
            else {
                alert("Value is to loo")
            }
        }
    }
})
export const { incriment,decriment } = counterSlice.actions;
export default counterSlice.reducer;