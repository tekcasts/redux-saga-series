
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import createSagaMiddleware from "@redux-saga/core";

import { fetchVaccineListSaga } from "./sagas"


// const preloadedState = {
//     vaccine: {
//         registrants: [
//             { name: "Deva", date: "12 Oct 21", vaccine: "Covaxin" }
//         ]
//     }
// }

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: false,
    }).concat(sagaMiddleware),
    devTools: true,
});

sagaMiddleware.run(fetchVaccineListSaga);

export default store;