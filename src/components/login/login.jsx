import { useFormik } from "formik"

function LoginPage(){
    var loginForm=useFormik({
        initialValues:{
            username:"",
            password:""
        },
        onSubmit:(values)=>{
            //console.log(values)
        }
    })
    /* <div class="row g-4 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">username</label>
                            </div>
                            <div class="col-auto">
                                <input type="text" class="form-control"/>
                            </div>                           
                        </div>
                        <div class="row g-4 align-items-center">
                            <div class="col-auto">
                                <label for="inputPassword6" class="col-form-label">Password</label>
                            </div>
                            <div class="col-auto">
                                <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
                            </div>
                            <div class="col-auto">
                                <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                                </span>
                            </div>
                        </div>*/
    return <div>
        <h1 className="text-center" >Login</h1>
        <div class="outerDiv" >                
            <div class="myContainer">            
                    <form onSubmit={loginForm.handleSubmit} >
                        <label htmlFor="username">Username</label>
                        <input type="text"id="username" class="inputBoxBorder" {...loginForm.getFieldProps("username")} />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" class="inputBoxBorder" {...loginForm.getFieldProps("password")} />
                       
                        <button className="btn btn-primary" type="submit">Login </button>
                        
                    
                    </form>
                    
            </div>
        </div>
    </div> 
}
export default LoginPage