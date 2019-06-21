import { jobs } from '../modules/JobsList'
import { vacancy } from '../modules/Vacancy'
import { favourites } from '../modules/FavouriteList'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  jobs,
  vacancy,
  favourites,
})

export default rootReducer
