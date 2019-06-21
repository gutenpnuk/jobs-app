import { connect } from 'react-redux'
import { JobsList } from '../modules/JobsList'
import { fetchJobs } from '../modules/JobsList/duck'
import * as R from 'ramda'
import { getAllJobs, getJobsLoading, getJobsErrored } from '../selectors'

const mapStateToProps = R.applySpec({
  items: getAllJobs,
  isLoading: getJobsLoading,
  hasErrored: getJobsErrored,
})

const mapDispatchToProps = {
  fetchJobs,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JobsList)
