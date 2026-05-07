import { Link } from "react-router-dom"
import hospital from "../../assets/hospital.jpg"
function AboutPage(){
    return <div>
        <h1 className="text-center" >About</h1>
            <div class="card mb-3" >
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src={hospital} class="img-fluid rounded-start h-100 w-100 " alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam accusantium atque, eum numquam voluptatem impedit optio repellendus voluptate, aut ipsum, tempora quidem praesentium ex harum magni. Officiis, asperiores! Suscipit, blanditiis.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, necessitatibus? Neque, rem quia temporibus amet quis accusantium nam laborum pariatur nulla nobis repellat eos, expedita laboriosam ut? Odit, dignissimos hic!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione repellendus nesciunt iste, quis esse totam ut vel hic ipsam ullam eaque architecto repudiandae, unde adipisci doloremque, distinctio debitis in soluta.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur incidunt reiciendis repellat? Perspiciatis reprehenderit veniam doloremque molestiae. Molestiae iste repudiandae ipsa nulla corporis quos exercitationem ipsam non veritatis quidem?</p>
                    </div>
                    </div>
                </div>
            </div>
        <div class="d-grid gap-2 col-6 mx-auto">
            <Link class="btn btn-primary" to="/loginPage" >Book A Appointment Now </Link>
        </div>    
    </div>
}
export default AboutPage