import App from "../App";
import { Outlet } from "react-router-dom";
const AppRouter = () => {
    return(
        <>
       <App/>
       <Outlet />

    </>

    )
    
 
}
export default AppRouter;