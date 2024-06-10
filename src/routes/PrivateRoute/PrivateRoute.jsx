
import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hook/UseAuth";


const PrivateRoute = ({children}) => {
        const {user,loading} = UseAuth()
        const location = useLocation()
                if(loading) {
                        return <div className="mx-auto"><span className="loading loading-spinner loading-md mt-20"></span></div>
                    }
                    if (user) {
                        return children
                    }
                
                    return  <Navigate to="/login" state={{ from: location }} replace />;
      
};

export default PrivateRoute;