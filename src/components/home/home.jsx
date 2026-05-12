import img1 from "../../assets/homeImg1.jpg"
import img2 from "../../assets/homeImg2.jpg"
import img3 from "../../assets/homeImg3.jpg"
import AboutPage from "../About/about"
import hcImg1 from "../../assets/homeChooseImg1.jpg"
import hcImg2 from "../../assets/homeChoosenImg2.jpg"
import hcImg3 from "../../assets/homeChooseImg3.jpg"
function HomePage(){
    return <div>
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
                                <h5 className="fw-bold text-light" >First slide label</h5>
                                <p className="text-light" >Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img2} className="d-block w-100" alt="Something Went Wrong"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fw-bold text-light" >second slide label</h5>
                                <p className="text-light" >Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                         <div className="carousel-item">
                            <img src={img3} className="d-block w-100" alt="Something Went Wrong"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="fw-bold text-light" >Third slide label</h5>
                                <p className="text-light" >Some representative placeholder content for the third slide.</p>
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
        <AboutPage/>
        <h1 className="text-center p-3 " >Why To Choose Us?</h1>
        <div class="card-group">
            <div class="card  m-3 ">
                <img src={hcImg1} class="card-img-top h-25 " alt="Something Went Wrong"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptate odio praesentium placeat dicta voluptas perspiciatis magni neque, suscipit nam possimus blanditiis ullam amet omnis rem sunt quas culpa harum!</p>               
                </div>
            </div>
            <div class="card  m-3 ">
                <img src={hcImg2} class="card-img-top h-25 " alt="Something Went Wrong"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium vitae sed deleniti quos, reprehenderit, recusandae quas, beatae ad labore nulla illum? Quam ad deserunt quas nemo quibusdam reprehenderit illo eveniet.</p>
                </div>
            </div>
            <div class="card m-3   ">
                <img src={hcImg3} class="card-img-top h-25 " alt="Something Went Wrong"/>
                <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel eligendi, aperiam ipsa dolorum, excepturi ducimus sequi consectetur necessitatibus explicabo quaerat numquam rem quisquam veritatis quo corporis molestias facere sint maxime.</p>
                </div>
            </div>
        </div>
    </div>
}
export default HomePage