import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  const { serviceName, onServiceChange } = props

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">StarWars Database</a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/people" className="nav-link">People</Link>
          </li>
          <li className="nav-item">
            <Link to="/planets" className="nav-link">Planets</Link>
          </li>
          <li className="nav-item">
            <Link to="/starships" className="nav-link">Starships</Link>
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
