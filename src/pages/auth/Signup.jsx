
function  Signup(){

    return (
        <div className="flex justify-center items-center h-[90vh]">
       <div className="card bg-primary text-primary-content w-96">
            <div className="card-body flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <h2 className="card-title text-4xl text-white">Login</h2>
                </div>
                <div className="w-full">
                <input
                    type="text"
                    placeholder="User ID"
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />
                </div>
                <div className="w-full">
                <input
                    type="email"
                    placeholder="Email"
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />
                </div>
               <div className="w-full">
               <input
                    type="password"
                    placeholder="Password"
                    className="input text-white input-bordered input-secondary w-full max-w-xs" />           
               </div>
               <div className="w-full">
               <details className="dropdown">
                    <summary className="btn">User Type</summary>
                    <ul className="menu dropdown-content bg-base-100 text-white rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Customer</a></li>
                        <li><a>Enginner</a></li>
                    </ul>
                    </details>
                </div>
                <div className="w-full card-actions mt-4">
                <button className="btn btn-warning w-full font-bold text-xl">Submit</button>
                </div> 
                
            </div>
        </div>
        </div>
    )
}

export default Signup;