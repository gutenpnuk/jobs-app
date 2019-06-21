import * as R from 'ramda'

export const getFavourite = () =>
  JSON.parse(localStorage.getItem('favouriteJobs') || '[]')

export const setFavourite = jobsList =>
  (localStorage.favouriteJobs = JSON.stringify(jobsList))

export const addToLocalFavourite = job => {
  const favouriteList = getFavourite()
  const updatedFavouriteList = [...favouriteList, job]
  setFavourite(updatedFavouriteList)
}

export const removeFromLocalFavourite = id => {
  const favouriteList = getFavourite()
  const updatedFavouriteList = R.reject(
    R.pipe(
      R.prop('id'),
      R.equals(id),
    ),
    favouriteList,
  )
  setFavourite(updatedFavouriteList)
}
