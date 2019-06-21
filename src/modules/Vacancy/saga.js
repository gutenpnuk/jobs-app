import {
  setVacancyErrored,
  setVacancyLoading,
  setVacancy,
  fetchVacancy,
} from './duck'
import { put, all, call, takeEvery, select } from 'redux-saga/effects'
import { getVacancyData } from '../../managers'
import { getVacancyQuery } from '../../selectors'

const fetchVacancyAsync = function*() {
  try {
    yield put(setVacancyLoading(true))
    const query = yield select(getVacancyQuery)
    const data = yield call(getVacancyData, query)
    yield put(setVacancyLoading(false))
    yield put(setVacancy(data))
  } catch (error) {
    yield put(setVacancyLoading(false))
    yield put(setVacancyErrored(true))
  }
}

const vacancySaga = function*() {
  yield all([takeEvery(fetchVacancy, fetchVacancyAsync)])
}

export default vacancySaga
