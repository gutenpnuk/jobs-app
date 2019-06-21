import * as R from 'ramda'

export const getJobsList = R.pipeP(
  query => fetch(`positions.json?${query}`),
  res => res.json(),
)
