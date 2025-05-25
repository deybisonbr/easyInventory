import AppRoutes from "./app.routes";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";

function Routes() {
    const { signed } = useContext(AuthContext)
    
    const loading = false;
    
    return (
        <AppRoutes />
    )
}

export default Routes;