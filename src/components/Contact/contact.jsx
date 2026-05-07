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
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" {...contactForm.getFieldProps("name")} ></textarea>
                <label htmlFor="floatingTextareaDisabled">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInputDisabled" placeholder="name@example.com"  {...contactForm.getFieldProps("email")} />
                <label htmlFor="floatingInputDisabled">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled"  {...contactForm.getFieldProps("msg")} ></textarea>
                <label htmlFor="floatingTextarea2Disabled">Message</label>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary" type="submit">Send Message</button>            
            </div>
      </form>
    </div>
}
export default ContactPage