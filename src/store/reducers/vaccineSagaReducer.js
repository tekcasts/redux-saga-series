import { createAction, createSlice } from "@reduxjs/toolkit";

import { call, put } from "@redux-saga/core/effects";
import * as Api from "../../service/api-vaccine"

export function* getVaccineListSaga() {
    yield put(sagaVaccineListLoad());
    try {
        const response = yield call(Api.fetchVaccineAPI);
        yield put(sagaVaccineListSuccess(response.data))
    } catch (err) {
        yield put(sagaVaccineListFailure(err.message))
    }
}

const initialState = {
    registrants: [],
    loading: false,
    error: ''
}


const vaccineSlice = createSlice({
    name: 'vaccine',
    initialState,
    reducers: {
        sagaVaccineListLoad(state) {
            state.loading = true;
        },
        sagaVaccineListSuccess(state, action) {
            state.registrants.push(...action.payload);
            state.loading = false;
        },
        sagaVaccineListFailure(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    },
})

export const getVaccineList = createAction("getVaccineListAction");

const { sagaVaccineListLoad, sagaVaccineListSuccess, sagaVaccineListFailure } = vaccineSlice.actions;

export default vaccineSlice.reducer;