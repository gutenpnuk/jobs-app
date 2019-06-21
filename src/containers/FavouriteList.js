import { connect } from 'react-redux'
import * as R from 'ramda'
import { FavouriteList } from '../modules/FavouriteList'
import {
  getFilteredFavourites,
  getAllFavourites,
  getFavouriteIsLoading,
  getFavouriteHasErrored,
} from '../selectors'
import {
  addToFavourite,
  removeFromFavourite,
  setFilter,
} from '../modules/FavouriteList/duck'

const mapStateToProps = R.applySpec({
  items: getAllFavourites,
  isLoading: getFavouriteIsLoading,
  hasErrored: getFavouriteHasErrored,
})

const mapDispatchToProps = {
  addToFavourite,
  removeFromFavourite,
  setFilter,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FavouriteList)
