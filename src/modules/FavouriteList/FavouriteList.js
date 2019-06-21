import React from 'react'
import { FavouriteItem } from '../FavouriteItem'

const FavouriteList = ({ items, isLoading, hasErrored }) => {
  return (
    <div>
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => <FavouriteItem key={item.id} {...item} />)
      )}
    </div>
  )
}

export default FavouriteList
