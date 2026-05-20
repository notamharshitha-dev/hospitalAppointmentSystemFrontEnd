import img1 from "../../assets/homeImg1.jpg"
import img2 from "../../assets/homeImg2.jpg"
import img3 from "../../assets/homeImg3.jpg"
import hospital from "../../assets/hospital.jpg"
import hcImg1 from "../../assets/homeChooseImg1.jpg"
import hcImg2 from "../../assets/homeChoosenImg2.jpg"
import hcImg3 from "../../assets/homeChooseImg3.jpg"
import Navbar from "../../features/indexPage/navbar"
import { Link } from "react-router-dom"
function HomePage(){
    return <div>
        <Navbar/>
        <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src={img1} className="d-block w-100  " alt="Something Went Wrong"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fw-bold text-light" >Your Health, Our Priority</h5>
                                <p className="text-light" >Book appointments with trusted doctors anytime, anywhere with ease.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="Something Went Wrong"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fw-bold text-light" >Digital Healthcare Experience</h5>
                                <p className="text-light" >Book appointments with trusted doctors anytime, anywhere with ease.</p>
                            </div>
                        </div>
                         <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="Something Went Wrong"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fw-bold text-light" >Connect with Top Specialists</h5>
                                <p className="text-light" >Browse through our list of experienced doctors and find the right specialist for your health needs.</p>
                            </div>
                        </div>
                         
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
            </div>
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
                        <h1 className="text-center p-3 " >Why To Choose Us?</h1>
                        <div class="card-group">
                            <div class="card  m-3 ">
                                <img src={hcImg1} class="card-img-top  " alt="Something Went Wrong"/>
                                <div class="card-body">
                                <h5 class="card-title">Personalized Excellence</h5>
                                <p class="card-text">We believe in a patient-first approach. Our dedicated team takes the time to understand your unique health needs and preferences, creating tailored treatment plans for every individual.</p>               
                                </div>
                            </div>
                            <div class="card  m-3  ">
                                <img src={hcImg2} class="card-img-top h-50 " alt="Something Went Wrong"/>
                                <div class="card-body">
                                <h5 class="card-title"> Trusted Care</h5>
                                <p class="card-text">Your health is in safe hands. With years of experience and a commitment to clinical integrity, our medical professionals provide reliable, evidence-based care you can count on.</p>
                                </div>
                            </div>
                            <div class="card m-3   ">
                                <img src={hcImg3} class="card-img-top  h-50" alt="Something Went Wrong"/>
                                <div class="card-body">
                                <h5 class="card-title">Empowering Wellness Journey</h5>
                                <p class="card-text">We go beyond just treating illness. We focus on preventive care and patient education to empower you with the knowledge and tools needed to lead a healthier, more vibrant life.</p>
                                </div>
                            </div>
                        </div>
    </div>
}
export default HomePage