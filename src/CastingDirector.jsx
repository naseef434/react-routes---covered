import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const  Castingdirector = () => {
    const [role, setRole] = useState(localStorage.getItem("role")==="castingdirector"?true:null);

    return role ? <Outlet /> : <Navigate to="/" />;
}

  export default Castingdirector