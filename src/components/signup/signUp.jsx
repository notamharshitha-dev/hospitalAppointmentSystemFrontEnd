import { useFormik } from "formik"

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
    return   <div>
        <h1 className="text-center" >signUp</h1>
        <div class="outerDiv" >                
            <div class="myContainer">            
                    <form onSubmit={signUpForm.handleSubmit} >
                        <label htmlFor="username">Username</label>
                        <input type="text"id="username" class="inputBoxBorder" {...signUpForm.getFieldProps("username")}  />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" class="inputBoxBorder" {...signUpForm.getFieldProps("password")} />
                        <button className="btn btn-primary" type="submit">SignUp </button>                     
                    </form>                    
            </div>
        </div>
    </div> 
}
export default SignUpPage