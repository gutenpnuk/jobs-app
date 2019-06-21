import { createAction, handleAction } from 'redux-actions'
import * as R from 'ramda'
import { combineReducers } from 'redux'

export const setJobsList = createAction('app/SET_JOBS_LIST')
export const fetchJobs = createAction('app/FETCH_JOBS')
export const setJobsLoading = createAction('app/SET_JOBS_LOADING')
export const setJobsErrored = createAction('app/SET_JOBS_ERRORED')

const isLoading = handleAction(
  setJobsLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasErrored = handleAction(
  setJobsErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const all = handleAction(
  setJobsList,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  [],
)

const query = handleAction(
  fetchJobs,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const jobs = combineReducers({
  isLoading,
  hasErrored,
  all,
  query
})

export default jobs
