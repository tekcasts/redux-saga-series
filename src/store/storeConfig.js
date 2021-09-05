
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";


// const preloadedState = {
//     vaccine: {
//         registrants: [
//             { name: "Deva", date: "12 Oct 21", vaccine: "Covaxin" }
//         ]
//     }
// }

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
    }),
    devTools: true,
});

export default store;