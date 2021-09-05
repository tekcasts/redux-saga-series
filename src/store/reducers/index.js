import { combineReducers } from "redux";

import vaccineReducer from './vaccineSagaReducer';

const rootReducer = combineReducers({
    vaccine: vaccineReducer,
});

export default rootReducer;