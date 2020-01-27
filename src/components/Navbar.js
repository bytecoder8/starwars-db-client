import React from 'react'

export default function Navbar() {
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
      </div>
    </nav>
  )
}
