import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'


export default function Navbar(props) {
  const { serviceName, onServiceChange } = props

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">StarWars Database</a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/people" className="nav-link">People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/planets" className="nav-link">Planets</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/starships" className="nav-link">Starships</NavLink>
          </li>
        </ul>

        <form className="form-inline ml-3">
          Current API: { serviceName }
          <button
            className="btn btn-sm btn-outline-success ml-1"
            type="button"
            onClick={ onServiceChange }
          >Switch</button>
        </form>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  serviceName: PropTypes.string,
  onServiceChange: PropTypes.func
}

Navbar.defaultProps = {
  serviceName: 'Unknown',
  toggleService: () => {}
}
