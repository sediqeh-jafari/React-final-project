import Home from "../Pages/Home"
import Movies from "../Pages/Movies"
import SpecialGenres from "../Pages/SpecialGenres"
import Main2 from "../Components/Main2"
import Register from "../Pages/Register"
import Login from "../Pages/Login"
import Profile from "../Pages/Profile"
export const router = [
    {
        path: '/',
        element: <Home />
    }
    ,
    {
        path: `/SpecialGenres/:id`,
        element: <SpecialGenres />
    },
    {
        path: `/Movies/:id`,
        element: <Movies/>
    }, {
        path: `/searchquery`,
        element: <Main2/>
    },
    {
        path: `/Register`,
        element: <Register/>
    },
    {
        path: `/Login`,
        element: <Login/>
    },
    {
        path: `/Profile`,
        element: <Profile/>
    },
    {
        path: '*',
        element: <Home />
    }

]