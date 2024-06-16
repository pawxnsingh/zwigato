import { createSlice, current } from "@reduxjs/toolkit";

// A function that accepts an initial state, an object of reducer functions, and a "slice name", 
// and automatically generates action creators and action types that correspond to the reducers and state.

// it internally uses createAction() and createReducers()
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        /** this will me action as object
         * {
         *      payload:
         * }
         */
        // addItem is the action: corresponding to the reducer function

        /**
         * An object containing Redux "case reducer" functions (functions intended to handle a specific action type, 
         * equivalent to a single case statement in a switch).
         * The keys in the object will be used to generate string action type constants, 
         * and these will show up in the Redux DevTools Extension when they are dispatched. 
         * Also, if any other part of the application happens to dispatch an action with the exact same type string, 
         * the corresponding reducer will be run. Therefore, you should give the functions descriptive names.
         * This object will be passed to createReducer, so the reducers may safely "mutate" the state they are given.
         */
        addItem: (state, action) => {
            // here the state will state is the memory variable of the slice
            // and the action that we need to perform

            // * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandotory
            //  const newState = [ ...state ];
            //  newState.items.push(action.payload)
            //  return newState
            // * Redux Toolkit - We should have to mutate the state, returning is not mandotory

            // * RTK uses Immer.js behind the scenes for creating the immutable state
            // by create taking the old state, calculating the diff, and giving the new state

            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        // originalState = {items: []}
        clearCart: (state) => {
            // * RTK - either Mutate existing the state or return the new State
            state.items.length = 0; // or we can do something like this
            return {items: []}

            // state = [] // we cant do this because, we are just changing the reference of the 
            // state variable, it is not actually mutating the state, this is changing the refernce
            // immer expect us to mutate the change

            // state = [], here state is the local variable,
            // it will not update the original value
        },
    },
});

// here i will export two item
export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
