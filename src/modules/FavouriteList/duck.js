import { createAction, handleAction, handleActions } from 'redux-actions'
import { combineReducers } from 'redux'
import * as R from 'ramda'

export const addToFavourite = createAction('app/ADD_TO_FAVOURITE')
export const removeFromFavourite = createAction('app/REMOVE_FROM_FAVOURITE')
export const setFilter = createAction('app/SET_FILTER')
export const setFavouriteLoading = createAction('app/SET_FAVOURITE_LOADING')
export const setFavouriteErrored = createAction('app/SET_FAVOURITE_ERRORED')
export const getFavourites = createAction('app/GET_FAVOURITES')

const all = handleActions(
  {
    [addToFavourite]: (state, { payload }) => R.append(payload, state),
    [removeFromFavourite]: (state, { payload }) =>
      R.reject(
        R.pipe(
          R.prop('id'),
          R.equals(payload),
        ),
      )(state),
    [getFavourites]: R.pipe(
      R.nthArg(1),
      R.prop('payload'),
    ),
  },
  [],
)

const isLoading = handleAction(
  setFavouriteLoading,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const hasErrored = handleAction(
  setFavouriteErrored,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  false,
)

const activeFilter = handleAction(
  setFilter,
  R.pipe(
    R.nthArg(1),
    R.prop('payload'),
  ),
  '',
)

const favourites = combineReducers({
  all,
  activeFilter,
  isLoading,
  hasErrored,
})

export default favourites
