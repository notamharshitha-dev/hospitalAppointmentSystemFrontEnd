import { useFormik } from "formik";
import { Toast } from "bootstrap"
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../features/indexPage/navbar";
import { useSendpatientAppointmentDetailsMutation } from "../../services/patientApi";
function BookAppointment(){
    var navigate=useNavigate()
    var {state}=useLocation();
    //console.log("In book appointment Page :::",state)
    var [postPatientAppointmentDetailsFn]=useSendpatientAppointmentDetailsMutation()
    var patientAppointmentDetails=useFormik({
        initialValues:{
            patientId:window.localStorage.getItem("userid"),
            doctorName:state.name,
            doctorMail:state.email,
            consultationFee:state.fees,
            status:"pending",
            appointmentDate:"",
            time:"",
            
        },
        onSubmit:(values)=>{
            console.log(values);
            postPatientAppointmentDetailsFn(values).then((res)=>{
                console.log(res)
            })
        }
    })
      function displayToastMsg() {
        console.log("hello")
            const toastEl = document.getElementById("liveToast");
            const toast = new Toast(toastEl);
            toast.show();
            navigate("/doctorsPage")
            }
   return <div>
        <Navbar/>
        <div class="center">
            <div className="displayDoctorDiv" >
                <form onSubmit={patientAppointmentDetails.handleSubmit} >
                    <h1 >{state.name}</h1>
                <h5>Consultation Fee:{state.fees}</h5>
                <h5>Experience:{state.experience}</h5>
                <h5>Speciality:{state.speciality}</h5><br />
                <input type="date"  {...patientAppointmentDetails.getFieldProps("appointmentDate")}   /> <br /><br />
                <div className="form-floating  ">
                    <select className="form-select" id="floatingSelectDisabled" arsia-label="Floating label  select example" {...patientAppointmentDetails.getFieldProps("time")} >
                        <option value="10:00-11:30">10:00-11:30</option>
                        <option value="13:30-14:45">13:30-14:45</option>   
                        <option value="16:30-18:00">16:30-18:00</option>
                        <option value="19:30-20:30">19:30-20:30</option>                     
                    </select>   
                    <label htmlFor="floatingSelectDisabled">Select Time</label>                 
                </div> <br />
                <div className="d-grid gap-2 col-6 mx-auto">                         
                <button type="submit" className="btn btn-primary  p-3 w-100 bg-success " id="liveToastBtn" onClick={()=>{ displayToastMsg() }} >book Appointment</button>
                    <div className="toast-container position-fixed top-0 end-0 p-3">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>                        
                        <div className="toast-body">
                        Appointment booked Successfully
                        </div>
                    </div>
                    </div>
            </div>
                </form>
                
             </div>
        </div>
    </div>
}
export default BookAppointment