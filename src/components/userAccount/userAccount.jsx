import React from "react";
import Navbar from "../../features/indexPage/navbar";
import { useNavigate } from "react-router-dom";
import { useGetUserAccountDetailsQuery } from "../../services/userAccountApi";
function UserAccount(){
    var {isLoading,data}=useGetUserAccountDetailsQuery();
    console.log(data)
    var navigate=useNavigate();
    function logout(){
        window.localStorage.clear()
        navigate("/homePage")
    }
    return <div>
        <Navbar/>
        <h1 className="text-center text-success " >My Account</h1>
        <div className='center ' >            
            <div className="displayUserAccountDiv d-flex " >                
                    <div>
                       <h4>NAME</h4>
                        <h4>DOB  </h4>
                        <h4>GMAIL</h4>
                        <h4>PHONE</h4>
                        <h4>ADDRESS</h4>
                    </div>
               <div>
                    
                     <h4 >:{data?.username}</h4>
                    <h4>:{data?.dob}</h4>
                    <h4>:{data?.email}</h4>
                    <h4>:{data?.phone}</h4>
                    <h4>:{data?.address}</h4>
                    <button className="btn btn-primary m-5 " onClick={()=>{ logout() }}  >Logout  <i class="bi bi-box-arrow-right"></i></button>
               </div>
            </div>
        </div>
    </div>
}
export default UserAccount