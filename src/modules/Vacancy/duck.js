import { createAction, handleAction } from 'redux-actions'
import * as R from 'ramda'
import { combineReducers } from 'redux'

export const setVacancy = createAction('app/SET_VACANCY')
export const fetchVacancy = createAction('app/FETCH_VACANCY')
export const setVacancyLoading = createAction('app/SET_VACANCY_LOADING')
export const setVacancyErrored = createAction('app/SET_VACANCY_ERRORED')

const isLoading = handleAction(
  setVacancyLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasErrored = handleAction(
  setVacancyErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const vacancyData = handleAction(
  setVacancy,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  {},
)

const query = handleAction(
  fetchVacancy,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const vacancy = combineReducers({
  isLoading,
  hasErrored,
  vacancyData,
  query,
})

export default vacancy
