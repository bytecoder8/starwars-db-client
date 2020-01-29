import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Loader from '../Loader'


export class PersonDetails extends Component {
  static propTypes = {
    personId: PropTypes.oneOfType([
      PropTypes.string.isRequired,
      PropTypes.number.isRequired
    ])
  }

  state = {
    person: {},
    isLoading: true
  }

  componentDidMount() {
    this.updateData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updateData()
    }
  }

  async updateData() {
    const { personId, apiService } = this.props

    this.setState({ isLoading: true })

    const person = await apiService.getPerson(personId)
    this.setState({
      person,
      isLoading: false
    })
  }

  render() {
    const { isLoading, person } = this.state
    const { personId } = this.props

    if (isLoading) {
      return <Loader />
    }

    return (
      <div className="card">
        <h3 className="card-header">{ person.name } #{ personId }</h3>
        <div className="card-body">
          <ul className="list-group person-details">
            <li className="list-group-item">
              Height: { person.height }
            </li>
            <li className="list-group-item">
              Gender: { person.gender }
            </li>
            <li className="list-group-item">
              Birthyear: { person.birthYear }
            </li>
            <li className="list-group-item">
              Eye Color: { person.eyeColor }
            </li>
            <li className="list-group-item">
              Hair Color: { person.hairColor }
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default PersonDetails
