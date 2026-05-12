import { useFormik } from "formik"
import { Toast } from "bootstrap"
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
   function displayToastMsg() {
  const toastEl = document.getElementById("liveToast");
  const toast = new Toast(toastEl);
  toast.show();
};
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
                <button type="submit" className="btn btn-primary" id="liveToastBtn" onClick={()=>{ displayToastMsg() }} >Show live toast</button>
                    <div className="toast-container position-fixed top-0 end-0 p-3">
                    <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>                        
                        <div className="toast-body">
                        Deatils were Sent Successfully
                        </div>
                    </div>
                    </div>
            </div>
      </form>
    </div>
}
export default ContactPage