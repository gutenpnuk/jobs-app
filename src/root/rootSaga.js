import { jobsSaga } from '../modules/JobsList'
import { vacancySaga } from '../modules/Vacancy'
import { favouritesSaga } from '../modules/FavouriteList'
import { all } from 'redux-saga/effects'

const rootSaga = function*() {
  yield all([jobsSaga(), vacancySaga(), favouritesSaga()])
}

export default rootSaga
