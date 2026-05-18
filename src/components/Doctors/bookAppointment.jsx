import { useFormik } from "formik";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../features/indexPage/navbar";
function BookAppointment(){
    var {state}=useLocation();
    console.log("In book appointment Page :::",state)
    var [dateTime,setDateTime]=useState("")
    var userForm=useFormik({
        initialValues:{
            name:"",
            email:"",
            phone:"",
            address:"",
            status:"pending"
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    })
    function dateAndTime(ev){
        //console.dir(ev.target.value) ; 
        var dateAndTime=new Date(ev.target.value);
        console.log(dateAndTime);
        setDateTime(dateAndTime)
    }
   return <div>
        <Navbar/>
        <div class="center">
            <div className="displayDoctorDiv" >
                <h1>{state.name}</h1>
                <h5>Consultation Fee:{state.fees}</h5>
                <h5>Experience:{state.experience}</h5>
                <h5>Speciality:{state.speciality}</h5>
                <input type="datetime-local" onChange={(ev)=>{ dateAndTime(ev) }} />
                <button className="btn btn-primary m-3 " >Book Appointment</button>
             </div>
        </div>
        {/* <form onSubmit={userForm.handleSubmit} >                 
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" {...userForm.getFieldProps("email")} />
                    <label htmlFor="floatingInputDisabled">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Degree" {...userForm.getFieldProps("name")} />
                    <label htmlFor="floatingInputDisabled">Name</label>
                </div>                
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="phone"  {...userForm.getFieldProps("phone")} />
                    <label htmlFor="floatingInputDisabled">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Address" {...userForm.getFieldProps("address")} />
                    <label htmlFor="floatingInputDisabled">Address</label>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>*/}
    </div>
}
export default BookAppointment