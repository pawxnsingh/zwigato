// this is the redux store here
// this place is going to
// all the out state data in form of slices

// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// const appStore = configureStore({
//     reducer: {
//         cart: cartReducer,
//     },
// });

// export default appStore;

// the configureStore is being imported from the reduxjs/toolkit
// because it just redux thing, nothing to do with the react

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
// our stores has one big reducer and 
// and our slice also have the smaller reducer 
// and passing it to combineReducer utility
const appStore = configureStore({
  // If it is an object of slice reducers, like {users : usersReducer, posts : postsReducer},
  // configureStore will automatically create the ""root reducer"" by passing this object to the
  // Redux combineReducers utility.
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
