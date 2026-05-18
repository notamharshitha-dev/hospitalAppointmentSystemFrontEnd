import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../features/indexPage/navbar"
import { useGetUserLoginByNameMutation } from "../../services/loginApi"
import { useState } from "react";
function LoginPage(){
    var [getLoginFn]=useGetUserLoginByNameMutation();
    var [loginFailed,setLoginFailed]=useState(null);
    var [role,setRole]=useState("");
    console.log(role)
    var navigate=useNavigate()
    var loginForm=useFormik({
        initialValues:{
            username:"",
            password:"",
            role:"user"
        },
        onSubmit:(values)=>{
            console.log(values);
            getLoginFn(values).then((res)=>{
                console.log(res);
                if(res.data.msg === "login success" ){
                    window.localStorage.setItem("username",res.data.username);
                    window.localStorage.setItem("token",res.data.token);
                    setLoginFailed(null)
                }else{
                    setLoginFailed(res.data.msg)
                }
            })
        }
    })
  
    return <div>
        <Navbar/>
        <h1 className="text-center" >Login</h1>
        <div class="outerDiv" >                
            <div class="myContainer">            
                    <form onSubmit={loginForm.handleSubmit} >
                        <label htmlFor="username">Username</label>
                        <input type="text"id="username" class="inputBoxBorder" {...loginForm.getFieldProps("username")} />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" class="inputBoxBorder" {...loginForm.getFieldProps("password")} />                       
                        { window.localStorage.getItem("username") ? navigate("/homePage") : <button className="btn btn-primary " type="submit" onClick={()=>{ setRole("doctor") }} >Login </button> }  <br />     
                        <b>Not Yet Registered?</b><Link to="/signUpPage" >signUp</Link>   <br/><br />
                        { loginFailed!==null && <b className="text-danger" >{loginFailed}</b> }                  
                    </form>                    
            </div>
        </div>
    </div> 
}
export default LoginPage