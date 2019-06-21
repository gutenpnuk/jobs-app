import { setJobsErrored, setJobsLoading, setJobsList, fetchJobs } from './duck'
import { put, all, call, takeEvery, select } from 'redux-saga/effects'
import { getJobsList } from '../../managers/jobs'
import { getJobsQuery } from '../../selectors'

const fetchJobsAsync = function*() {
  try {
    yield put(setJobsLoading(true))
    const query = yield select(getJobsQuery)
    const data = yield call(getJobsList, query)
    yield put(setJobsLoading(false))
    yield put(setJobsList(data))
  } catch (error) {
    yield put(setJobsLoading(false))
    yield put(setJobsErrored(true))
  }
}

const jobsSaga = function*() {
  yield all([takeEvery(fetchJobs, fetchJobsAsync)])
}

export default jobsSaga
