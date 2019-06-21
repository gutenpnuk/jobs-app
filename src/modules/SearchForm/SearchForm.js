import React, { useState, useCallback } from 'react'

const SearchForm = ({ fetchJobs }) => {
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [fullTime, setFullTime] = useState(false)

  const handleSubmit = useCallback(
    event => {
      const query = `description=${description}&location=${location}&full_time=${
        fullTime ? 'on' : ''
      }`
      fetchJobs(query)
      event.preventDefault()
    },
    [fetchJobs, description, location, fullTime],
  )

  return (
    <form onSubmit={handleSubmit}>
      Job Description
      <input
        type="text"
        onChange={({ target: { value } }) => setDescription(value)}
      />
      Location
      <input
        type="text"
        onChange={({ target: { value } }) => setLocation(value)}
      />
      <input
        type="checkbox"
        onChange={({ target: { checked } }) => setFullTime(checked)}
      />
      Full time only
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchForm
