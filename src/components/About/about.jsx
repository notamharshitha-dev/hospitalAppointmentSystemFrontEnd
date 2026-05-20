import { Link } from "react-router-dom"
import hospital from "../../assets/hospital.jpg"
import Navbar from "../../features/indexPage/navbar"
function AboutPage(){
    return <div>
        <Navbar/>
        <h1 className="text-center" >About</h1>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={hospital} class="img-fluid rounded-start h-100 w-100 " alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p>Your health and well-being are our top priorities. Our team of dedicated medical professionals and specialists is committed to providing compassionate, high-quality care tailored to your individual needs.
                            </p>
                            <p>
                                We utilize state-of-the-art technology and modern treatment practices to ensure the best possible outcomes. Whether you are seeking a routine check-up, specialized treatment, or a consultation, we are here to support you every step of the way. Our mission is to make healthcare accessible, efficient, and reliable.
                            </p>
                            <p>
                                Navigating your health journey should be simple and stress-free. We have combined world-class medical expertise with an easy-to-use digital booking system, allowing you to prioritize your health without the hassle.We offer a comprehensive range of services, from general consultations to advanced diagnostics. We take pride in our patient-first approach, ensuring that every visit is comfortable, thorough, and focused on your long-term health. Your journey to wellness starts here.
                            </p>
                            <p>
                                We are a leading provider of comprehensive medical services. Our mission is to deliver exceptional clinical care while fostering a supportive and healing environment for all patients.With a multidisciplinary team of experienced doctors and modern medical facilities, we are equipped to handle a wide variety of health concerns with precision and care. We are committed to integrity and putting our patients at the center of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <Link class="btn btn-primary" to="/doctorsPage" >Book A Appointment Now </Link>
        </div>    
    </div>
}
export default AboutPage