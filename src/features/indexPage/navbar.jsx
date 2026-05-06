import React from "react"
import { Link } from "react-router-dom"
function Navbar(){
    return (
          <nav className="navbar sticky-top bg-body-tertiary" >
  <div className="container-fluid">
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page"  to="/HomePage" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to= "/aboutPage">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/doctorsPage">Doctors</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/galleryPage" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactPage" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
</nav>
    )
}
export default Navbar