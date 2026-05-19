import {useState} from "react"
import { Link, useNavigate } from "react-router-dom"
function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    var navigate=useNavigate()
    function logOutFn(){
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("username");
        navigate("/homePage");
    }
    return (
          <nav className="navbar sticky-top bg-body-tertiary" >
            <div className="container-fluid">    
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" onClick={() => setIsOpen(!isOpen)}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
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
                            {
                                window.localStorage.getItem("role")==="doctor" && 
                                    <li className="nav-item">
                            <Link className="nav-link" to="/contactPage" >Appointments</Link>
                            </li>
                            }
                            {
                                window.localStorage.getItem("role")==="user" && 
                                    <li className="nav-item">
                            <Link className="nav-link" to="/userAccountPage" >My Account</Link>
                            </li>
                            }
                            
                        </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
               { !window.localStorage.getItem("username") ? <Link className="btn btn-primary" to="/loginPage" >Get Started</Link> :  <button className="btn btn-primary" onClick={()=>{ logOutFn() }} >logout</button> }
                </div>
        </div>
        
</nav>
    )
}
export default Navbar