import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../features/indexPage/navbar"
import { useGetUserSignUpByNameMutation } from "../../services/signUpApi"
import { useState } from "react";

function SignUpPage(){
    var navigate=useNavigate();
    var [getNewUserFn]=useGetUserSignUpByNameMutation();
    var [role,setRole]=useState("");
    var signUpForm=useFormik({
        initialValues:{
            "username":"",
            "password":""
        },
        onSubmit:(values)=>{
           console.log({...values,role})
           getNewUserFn({...values,role}).then((res)=>{
            console.log(res);
            navigate("/loginPage")
           })
        }
    })
return<div>
        <Navbar/>
            <h1 className="text-center" >signUp</h1>
            <div className="outerDiv" >                
                <div className="myContainer">            
                        <form onSubmit={signUpForm.handleSubmit} >
                            <label htmlFor="username">Username</label>
                            <input type="text"id="username" className="inputBoxBorder" {...signUpForm.getFieldProps("username")}  />
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" className="inputBoxBorder" {...signUpForm.getFieldProps("password")} />
                            <button className="btn btn-primary m-4 " type="submit" onClick={()=>{ setRole("doctor") }} > Doctor Signup </button>  
                            <button className="btn btn-primary m-4 " type="submit" onClick={()=>{ setRole("user") }} > User Signup </button><br />
                            <b>Already a User?</b><Link to="/loginPage" >Login</Link>          
                        </form>                    
                </div>
            </div>
    </div> 
}
export default SignUpPage