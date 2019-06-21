import React from 'react'

const FavouriteItem = ({ item }) => {
  return (
    <div>
      <p>{item.id}</p>
      <button>delete</button>
    </div>
  )
}

export default FavouriteItem
