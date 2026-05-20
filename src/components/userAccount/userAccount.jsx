import React from "react";
import Navbar from "../../features/indexPage/navbar";
import { useNavigate } from "react-router-dom";
function UserAccount(){
    var navigate=useNavigate();
    function logout(){
        window.localStorage.clear()
        navigate("/homePage")
    }
    return <div>
        <Navbar/>
        <h1>User Account</h1>
        <div class='center' >
            <div class="displayUserAccountDiv" >
                <h3>Name</h3>
                <h3>Gender</h3>
                <h3>DOB</h3>
                <h3>Email</h3>
                <h3>Phone</h3>
                <h3>Address</h3>
                <button className="btn btn-primary m-5 " onClick={()=>{ logout() }}  >Logout</button>
            </div>
        </div>
    </div>
}
export default UserAccount