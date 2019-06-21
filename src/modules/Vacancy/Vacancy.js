import React, { useEffect } from 'react'

const Vacancy = ({ fetchVacancy, match, vacancy, isLoading, hasErrored }) => {
  useEffect(() => {
    fetchVacancy(match.params.id)
  }, [fetchVacancy, match.params.id])

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : hasErrored ? (
        <p>Error</p>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: vacancy.description }} />
      )}
    </div>
  )
}

export default Vacancy
