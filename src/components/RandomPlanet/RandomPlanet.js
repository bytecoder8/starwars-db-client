import React, { Component } from 'react'
import './RandomPlanet.css'
import MockApiService from '../../services/MockApiService'
import Loader from '../Loader'

export default class RandomPlanet extends Component {

  displayFields = [
    'name', 'population', 'diameter', 'rotationPeriod', 'orbitalPeriod',
    'climate', 'terrain', 'surfaceWater'
  ]

  state = {
    isLoading: true,
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
  api = new MockApiService()

  componentDidMount() {
    this.updateData()
  }

  async updateData() {
    const id = Math.floor(Math.random() * MockApiService.MAX_PLANETS) + 1
    const planet = await this.api.getPlanet(id)
    this.setState({ ...planet, isLoading: false })
  }

  render() {
    const { name, imgSrc, isLoading } = this.state

    if (isLoading) {
      return(<Loader />)
    }

    const elements = this.displayFields.map( key => (
      <li
        className="list-group-item d-flex justify-content-between align-items-center"
        key={ key }
      >
        { key }
        <span className="badge badge-primary badge-pill">{ this.state[key] }</span>
      </li>
    ))

    return(
      <div className="random-planet card w-50">
        <header className="card-header">
          { name }
        </header>
        <div className="card-body d-flex justify-content-between">
          <div className="planet-image w-25">
            <img
              src={ imgSrc }
              className="img-fluid"
              alt="Planet"
            />
          </div>
          <ul className="list-group ml-3 flex-grow-1">
            { elements }
          </ul>
        </div>
      </div>
    )
  }
}
