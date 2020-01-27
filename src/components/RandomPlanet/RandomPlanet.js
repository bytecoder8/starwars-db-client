import React, { Component } from 'react'
import './RandomPlanet.css'
import SWApiService from '../../services/SWApiService'

export default class RandomPlanet extends Component {

  state = {
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
  api = new SWApiService()

  componentDidMount() {
    this.updateData()
  }

  async updateData() {
    const id = Math.floor(Math.random() * SWApiService.MAX_PLANETS) + 1
    const planet = { id }
    // const planet = await this.api.getPlanet(id)
    this.setState({
      id,
      name: planet.name,
      population: planet.population,
      diameter: planet.diameter,
      rotationPeriod: planet.rotation_period,
      orbitalPeriod: planet.orbital_period,
      climate: planet.climate,
      terrain: planet.terrain,
      surfaceWater: planet.surface_water
    })
  }

  render() {
    const { id, name } = this.state

    const elements = Object.keys(this.state).map( key => (
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
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
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
