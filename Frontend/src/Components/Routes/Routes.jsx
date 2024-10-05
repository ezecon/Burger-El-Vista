import { createBrowserRouter } from "react-router-dom";
import { Register } from "../../Pages/Register/Register";
import { Login } from "../../Pages/Login/Login";
import Main from "../Main/Main";
import Home from "../../Pages/Home/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                path:'',
                element:<Home/>
            }
        ]
       
    },
    {
        path: "/register",
        element: <Register/>,
       
    },
    {
        path: "/login",
        element: <Login/>,
       
    },
    {
        path: '*',
        element: <div>404 Not Found</div>
    }
]);

export default router;
