import React, { useEffect } from 'react'
import { JobItem } from '../JobItem'
import { SearchForm } from '../SearchForm'

const JobsList = ({ fetchJobs, items, isLoading, hasErrored }) => {
  useEffect(() => {
    fetchJobs('')
  }, [fetchJobs])

  return (
    <div>
      <SearchForm fetchJobs={fetchJobs} />
      {hasErrored ? (
        <p>Error</p>
      ) : isLoading ? (
        <p>Loading</p>
      ) : (
        items.map(item => <JobItem key={item.id} {...item} />)
      )}
    </div>
  )
}

export default JobsList
