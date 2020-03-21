import RandomPlanet from './RandomPlanet'
import withApiService from '../../hocs/withApiService'

export default withApiService({ getData: 'getPlanet' })(RandomPlanet)
