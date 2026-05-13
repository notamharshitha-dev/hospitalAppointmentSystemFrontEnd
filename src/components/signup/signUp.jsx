import { useFormik } from "formik"
import { Link } from "react-router-dom"
import Navbar from "../../features/indexPage/navbar"

function SignUpPage(){
    var signUpForm=useFormik({
        initialValues:{
            "username":"",
            "password":""
        },
        onSubmit:(values)=>{
           //console.log(values)
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