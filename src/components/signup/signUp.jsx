import { useFormik } from "formik"
import { Link } from "react-router-dom"
import Navbar from "../../features/indexPage/navbar"
import { useGetUserSignUpByNameMutation } from "../../services/signUpApi"

function SignUpPage(){
    var [getNewUserFn]=useGetUserSignUpByNameMutation();
    var signUpForm=useFormik({
        initialValues:{
            "username":"",
            "password":"",
            "role":"doctor"
        },
        onSubmit:(values)=>{
           console.log(values)
           getNewUserFn(values).then((res)=>{
            console.log(res)
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
                            <button className="btn btn-primary" type="submit">SignUp </button>  <br />
                            <b>Already a User?</b><Link to="/loginPage" >Login</Link>          
                        </form>                    
                </div>
            </div>
    </div> 
}
export default SignUpPage