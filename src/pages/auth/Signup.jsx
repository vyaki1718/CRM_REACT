import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { signup } from '../../Redux/Slices/AuthSlice';
function  Signup(){

    const dispatch = useDispatch();
    const navigator = useNavigate();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        password: "",
        name:"",
        userType:"",
        userStatus:"",
        clientName:""
    });

    function handlInputChange(e){
        const {name, value}= e.target;
        setSignupDetails({...signupDetails, [name]:value});
    }

    function resetSignupState(){
        setSignupDetails({
            email: "",
        password: "",
        name:"",
        userType:"",
        userStatus:"",
        clientName:""
        });
    }

    async function onSubmit(){
        console.log("sunmit");
        if(!signupDetails.email || !signupDetails.password || !signupDetails.name || !signupDetails.userType || !signupDetails.userStatus || !signupDetails.clientName) return;
        const response = await dispatch(signup(signupDetails));
        console.log("res", response);
        if(response.payload) {
            navigator('/login');
            toast.success("Successfully signed up");
        }
        else{ 
            console.log("esle called");
            toast.error("Something went wrong, please try again");
            resetSignupState();
        }
    }

    console.log("userDetail", signupDetails);
    function handleUserType(e){
        console.log("event",e.target.textContent);
        const userType=e.target.textContent;
        setSignupDetails({
            ...signupDetails, 
            userType:userType,
            userStatus: userType === "customer" ? "approved" : "suspended",
        });
        const dp = document.getElementById('userTypeDropDown');
        // dp.removeAttribute("open");
        dp.open = !dp.open;
    }

    return (
        <div className="flex justify-center items-center h-[90vh]">
       <div className="card bg-primary text-primary-content w-96">
            <div className="card-body flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <h2 className="card-title text-4xl text-white">Signup</h2>
                </div>
                <div className="w-full">
                <input
                onChange={handlInputChange}
                    type="text"
                    autoComplete="one-time-code"
                    placeholder="Email ID"
                    name="email"
                    value={signupDetails.email}
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />
                </div>
               <div className="w-full">
               <input
                    onChange={handlInputChange}
                    type="password"
                    autoComplete="one-time-code"
                    name="password"
                    placeholder="Password"
                    value={signupDetails.password}
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />           
               </div>
               <div className="w-full">
               <input
                    onChange={handlInputChange}
                    type="text"
                    autoComplete="one-time-code"
                    name="name"
                    placeholder="User Name"
                    value={signupDetails.name}
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />           
               </div>
               <div className="w-full flex justify-start gap-2">
               <details className="dropdown" id="userTypeDropDown">
                    <summary className="btn">{signupDetails?.userType?.toLocaleUpperCase() || "User Type"}</summary>
                    <ul onClick={handleUserType} className="menu dropdown-content bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>customer</a></li>
                        <li><a>engineer</a></li>
                        <li><a>admin</a></li>
                    </ul>
                    </details>
                </div>
                <div className="w-full">
               <input
                    onChange={handlInputChange}
                    type="text"
                    autoComplete="one-time-code"
                    name="clientName"
                    placeholder="Client Name"
                    value={signupDetails.clientName}
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />           
               </div>
                <div className="w-full card-actions mt-4">
                <button onClick={onSubmit} className="btn btn-warning w-full font-bold text-xl">Submit</button>
                </div> 
                <p className="text-l text-white">
                   Already have an account ? <Link className="text-yellow-200 hover:text-white" to="/">Login instead</Link> 
                </p>
            </div>
        </div>
        </div>
    );
}

export default Signup;