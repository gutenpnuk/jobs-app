import * as R from 'ramda'

export const getVacancyData = R.pipeP(
  query => fetch(`${query}.json`),
  res => res.json(),
)
