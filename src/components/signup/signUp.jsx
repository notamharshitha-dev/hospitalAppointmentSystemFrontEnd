import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../features/indexPage/navbar"
import { useGetUserSignUpByNameMutation } from "../../services/signUpApi"
import { useState } from "react";

function SignUpPage(){
    var navigate=useNavigate();
    var [getNewUserFn]=useGetUserSignUpByNameMutation();
    var signUpForm=useFormik({
        initialValues:{
            "username":"",
            "password":"",
            "dob":"",
            "address":"",
            "email":"",
            "phone":"",
            "role":"user"
        },
        onSubmit:(values)=>{
           console.log(values)
           getNewUserFn(values).then((res)=>{
            console.log(res)
            console.log(res.data.newPatient._id);
           
            navigate("/loginPage");
           })
        }
    })
return<div>
        <Navbar/>
            <h1 className="text-center" >signUp</h1>
            <form onSubmit={signUpForm.handleSubmit} >                 
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" {...signUpForm.getFieldProps("email")} />
                    <label htmlFor="floatingInputDisabled">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Degree" {...signUpForm.getFieldProps("username")} />
                    <label htmlFor="floatingInputDisabled">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingInputDisabled" placeholder="Address" {...signUpForm.getFieldProps("password")} />
                    <label htmlFor="floatingInputDisabled">Password</label>
                </div> 
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="floatingInputDisabled" placeholder="Degree" {...signUpForm.getFieldProps("dob")} />
                    <label htmlFor="floatingInputDisabled">DOB</label>
                </div>     
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="phone"  {...signUpForm.getFieldProps("phone")} />
                    <label htmlFor="floatingInputDisabled">Phone</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputDisabled" placeholder="Address" {...signUpForm.getFieldProps("address")} />
                    <label htmlFor="floatingInputDisabled">Address</label>
                </div>   
                <div className="d-grid gap-2 d-md-block">
                    <button className="btn btn-primary" type="submit">Create Account</button>                    
                </div>  
            </form>
    </div> 
}
export default SignUpPage