import { useFormik } from "formik"

function ContactPage(){
    var contactForm=useFormik({
        initialValues:{
            name:"",
            email:"",
            msg:""
        },
        onSubmit:(values)=>{        
            console.log(values)
        }
    })
    return <div>
    <h1 className="text-align-center" >contact Us</h1>
      <form  onSubmit={contactForm.handleSubmit} >
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" {...contactForm.getFieldProps("name")} ></textarea>
                <label for="floatingTextareaDisabled">Name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInputDisabled" placeholder="name@example.com"  {...contactForm.getFieldProps("email")} />
                <label for="floatingInputDisabled">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled"  {...contactForm.getFieldProps("msg")} ></textarea>
                <label htmlFor="floatingTextarea2Disabled">Message</label>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="submit">Send Message</button>            
            </div>
      </form>
    </div>
}
export default ContactPage