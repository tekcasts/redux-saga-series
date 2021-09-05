import { takeEvery } from "@redux-saga/core/effects";

import { getVaccineList, getVaccineListSaga } from "../reducers/vaccineSagaReducer";

export function* fetchVaccineListSaga() {
    yield takeEvery(getVaccineList, getVaccineListSaga)
}
