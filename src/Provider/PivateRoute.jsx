import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    let location = useLocation()

    if (loading) {
        return <progress className="progress my-20 mx-auto w-56"></progress>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;