import {BrowserRouter, Route,Routes  } from "react-router-dom";

import Home from "../pages/auth/Home";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";


function MainRoutes(){
 
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
        </BrowserRouter>
    );
}

export default MainRoutes;