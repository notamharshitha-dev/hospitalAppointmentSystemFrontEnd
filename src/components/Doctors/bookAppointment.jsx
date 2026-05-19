import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../features/indexPage/navbar";
import { useSendpatientAppointmentDetailsMutation } from "../../services/patientApi";
function BookAppointment(){
    var {state}=useLocation();
    //console.log("In book appointment Page :::",state)
    var [postPatientAppointmentDetailsFn]=useSendpatientAppointmentDetailsMutation()
    var patientAppointmentDetails=useFormik({
        initialValues:{
            patientId:window.localStorage.getItem("userId"),
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
                </div> 
                <button className="btn btn-primary m-3  bg-success " >Book Appointment</button>
                </form>
             </div>
        </div>
    </div>
}
export default BookAppointment