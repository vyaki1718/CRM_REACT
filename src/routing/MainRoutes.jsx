import {BrowserRouter, Route,Routes  } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


function MainRoutes(){
 
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;