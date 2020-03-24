import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  const { serviceName, onServiceChange } = props

  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">StarWars Database</a>

      <div className="collapse navbar-collapse" id="navbarColor02">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/people">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/planets">Planets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/starships">Starships</a>
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
