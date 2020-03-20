import PersonDetails from './PersonDetails'
import withApiService from '../../hocs/withApiService'

export default withApiService(PersonDetails, 'getPerson')
