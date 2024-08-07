
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
               <div>
                    <div className="dropdown mb-32">
                      <div tabIndex={0} role="button" className="btn m-1">User Type</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
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