import * as R from 'ramda'

const getJobs = R.prop('jobs')

export const getAllJobs = R.pipe(
  getJobs,
  R.prop('all'),
)

export const getJobsLoading = R.pipe(
  getJobs,
  R.prop('isLoading'),
)

export const getJobsErrored = R.pipe(
  getJobs,
  R.prop('hasErrored'),
)

export const getJobsQuery = R.pipe(
  getJobs,
  R.prop('query'),
)
