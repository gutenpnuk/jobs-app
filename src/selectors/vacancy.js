import * as R from 'ramda'

const getVacancy = R.prop('vacancy')

export const getVacancyLoading = R.pipe(
  getVacancy,
  R.prop('isLoading'),
)

export const getVacancyErrored = R.pipe(
  getVacancy,
  R.prop('hasErrored'),
)

export const getVacancyData = R.pipe(
  getVacancy,
  R.prop('vacancyData'),
)

export const getVacancyQuery = R.pipe(
  getVacancy,
  R.prop('query'),
)
