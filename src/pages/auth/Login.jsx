import { useState } from "react";
import { useDispatch } from "react-redux";

import { login } from '../../Redux/Slices/AuthSlice';
function  Login(){

    const dispatch = useDispatch();

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    function handlInputChange(e){
        const {name, value}= e.target;
        setLoginDetails({...loginDetails, [name]:value});
    }

 function onSubmit(){
    if(!loginDetails.email || !loginDetails.password) return;
    const response = dispatch(login(loginDetails));
 }

    return (
        <div className="flex justify-center items-center h-[90vh]">
       <div className="card bg-primary text-primary-content w-96">
            <div className="card-body flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <h2 className="card-title text-4xl text-white">Login</h2>
                </div>
                <div className="w-full">
                <input
                onChange={handlInputChange}
                    type="text"
                    autoComplete="one-time-code"
                    placeholder="Email ID"
                    name="email"
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />
                </div>
               <div className="w-full">
               <input
                    onChange={handlInputChange}
                    type="password"
                    autoComplete="one-time-code"
                    name="password"
                    placeholder="Password"
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />           
               </div>
                <div className="w-full card-actions mt-4">
                <button onClick={onSubmit} className="btn btn-warning w-full font-bold text-xl">Submit</button>
                </div> 
            </div>
        </div>
        </div>
    );
}

export default Login;