import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './RandomPlanet.css'
import Loader from '../Loader'

export default class RandomPlanet extends Component {

  static propTypes = {
    apiService: PropTypes.object.isRequired
  }

  state = {
    isLoading: true,
    planet: {
      id: null,
      name: 'planet',
      population: 0,
      diameter: '',
      rotationPeriod: '',
      orbitalPeriod: '',
      climate: '',
      terrain: '',
      surfaceWater: ''
    }
  }

  constructor(props) {
    super(props)

    this.apiService = this.props.apiService
  }

  componentDidMount() {
    this.updateData()
  }

  async updateData() {
    const id = Math.floor(Math.random() * 10) + 1
    const planet = await this.apiService.getPlanet(id)
    this.setState({
      planet,
      isLoading: false
    })
  }

  render() {
    const { isLoading, planet } = this.state

    return(
      <div className="random-planet card w-50">
        { isLoading ? <div className="ml-auto mr-auto align-self-center"><Loader /></div> 
                    : <ViewPlanet planet={planet} /> }
      </div>
    )
  }
}


function ViewPlanet({ planet }) {
  const { id, imageSrc, name, ...displayProps } = planet

  const elements = Object.keys(displayProps).map( key => (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      key={ key }
    >
      { key }
      <span className="badge badge-primary">{ displayProps[key] }</span>
    </li>
  ))

  return(
    <Fragment>
      <header className="card-header">
        { name }
      </header>
      <div className="card-body d-flex justify-content-between">
        <div className="planet-image w-25">
          <img
            src={ imageSrc }
            className="img-fluid"
            alt="Planet"
          />
        </div>
        <ul className="list-group ml-3 flex-grow-1">
          { elements }
        </ul>
      </div>
    </Fragment>
  )
}
