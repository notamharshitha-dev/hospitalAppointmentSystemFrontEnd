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
        <h1>User Account</h1>
        <div class='center' >
            <div class="displayUserAccountDiv" >
                <h1>{data?.username}</h1>
                <h3>{data?.dob}</h3>
                <h3>{data?.email}</h3>
                <h3>{data?.phone}</h3>
                <h3>{data?.address}</h3>
                <button className="btn btn-primary m-5 " onClick={()=>{ logout() }}  >Logout</button>
            </div>
        </div>
    </div>
}
export default UserAccount