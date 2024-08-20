import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import {logout } from '../Redux/Slices/AuthSlice';
function HomeLayout({children}) {

    const authState = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigator = useNavigate();
    function onLogOut(){
           dispatch(logout());
           navigator('/');
    }
  return (
    <>
      <div className="min-h-[90vh]">
          <div className="drawer absolute left-0 right-0 mt-4 ml-4">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="">
                <BsFillMenuButtonWideFill 
                  size={"32px"}
                  className="cursor-pointer"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>View All Tickets</a>
                </li>
                <li>
                  <a>Dashboard</a>
                </li>
                <li className="absolute bottom-8">
                    <div className="w-full flex justify-center items-center gap-8">
                        {
                            !authState.isLoggedIn ? (
                                <>
                                    <Link to={'/'} style={{backgroundColor:"gray"}} className="btn-primary px-4 py-1 rounded-md font-semibold w-full">Login</Link>
                                    <Link to={'/signup'} style={{backgroundColor:"gray"}} className="btn-secondary px-4 py-1 rounded-md font-semibold w-full">Signup</Link>
                                </>
                            ) : (
                                <>
                                    <button onClick={onLogOut} style={{backgroundColor:"gray"}} className="btn-primary px-4 py-1 rounded-md font-semibold w-full">Logout</button>
                                    <Link to={'/signup'} style={{backgroundColor:"gray"}} className="btn-secondary px-4 py-1 rounded-md font-semibold w-full">Profile</Link>
                                </>
                            )
                        }
                    </div>
                </li>
              </ul>
            </div>
        </div>
       <div className="flex items-start justify-center">
        <div className="w-3/4">
       {children}
       </div>
       </div>
      </div>
     
    </>
  );
}

export default HomeLayout;
