import { useNavigate } from "react-router-dom";
import Navbar from "../../features/indexPage/navbar"
import { useGetAllDoctorsByNameQuery } from "../../services/doctorsApi"
function DoctorsPage(){
    var {isLoading,data}=useGetAllDoctorsByNameQuery();
    console.log(data);
    var navigate=useNavigate();
    function displayDoctorDetails(doctor){
        //console.log(doctor);
        navigate("/bookAppointmentPage",{
            state:doctor
        })
    }
    return <div>
        <Navbar/>
        <h3 className="text-center" >Select A Doctor And Book Your Appointment Now</h3>
        {isLoading && <h1 className="text-center text-success " >Loading...</h1> }
        <ul class="outerDoctorDiv" >
            {
                data?.map((doctorDetails)=>{
                    return <li onClick={()=>{ displayDoctorDetails(doctorDetails)  }} class="innerDoctorDiv"  >
                        <h4 className="text-success" >{doctorDetails.name}</h4>
                        <h5>{doctorDetails.degree}</h5>
                        <h5>{doctorDetails.speciality}</h5>                        
                    </li>
                })
            }
        </ul>
    </div>
}
export default DoctorsPage