import { connect } from 'react-redux'
import * as R from 'ramda'
import { Vacancy } from '../modules/Vacancy'
import {
  getVacancyLoading,
  getVacancyErrored,
  getVacancyData,
} from '../selectors'
import { fetchVacancy } from '../modules/Vacancy/duck'

const mapStateToProps = R.applySpec({
  isLoading: getVacancyLoading,
  hasErrored: getVacancyErrored,
  vacancy: getVacancyData,
})

const mapDispatchToProps = {
  fetchVacancy,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Vacancy)
