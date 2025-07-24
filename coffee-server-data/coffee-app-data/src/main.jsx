import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainleyaut from './component/Mainleyaut/Mainleyaut.jsx';
import AddCoffee from './component/AddCoffee/AddCoffee.jsx';
import App from './component/App.jsx';
import DitailsCard from './component/DitailsCard/DitailsCard.jsx';
import UpdateCoffee from './component/UpdateCoffee/UpdateCoffee.JSX';
import Error from './component/Error/Error.jsx';
import SignUp from './component/SignUp/SignUp.jsx';
import AuthProvaider from './component/AuthProvaider/AuthProvaider.jsx';
import Users from './component/Users/Users.jsx';
import Singin from './component/Singin/Singin.jsx';
import PrivetRouter from './component/PrivetRouter/PrivetRouter.jsx';
// import Update from './component/Update/Update.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainleyaut></Mainleyaut>,
    children: [
    {
    path:'/',
    element: <App></App>,
    loader: ()=> fetch('https://coffee-store-server-indol-mu.vercel.app/coffee')
    },
    {
    path:'/AddCoffee',
    element:<AddCoffee></AddCoffee>
    },
    {
  path: '/ditails/:id',
  element: <PrivetRouter><DitailsCard></DitailsCard></PrivetRouter> ,
  loader: ({params})=> fetch(`https://coffee-store-server-indol-mu.vercel.app/${params.id}`)
  },
  {
  path: '/updatecoffee/:id',
  element: <PrivetRouter><UpdateCoffee></UpdateCoffee></PrivetRouter> ,
  loader: ({params})=> fetch(`https://coffee-store-server-indol-mu.vercel.app/${params.id}`)
  },
  {
  path:'/signup',
  element: <SignUp></SignUp>
  },
  {
  path:'/users',
  element: <PrivetRouter><Users></Users></PrivetRouter> ,
  loader: ()=> fetch(`https://coffee-store-server-indol-mu.vercel.app/users`)
  },
  // {
  // path:'/update',
  // element: <Update></Update>,
  // loader: ()=> fetch(`http://localhost:5000/users`)
  // },
  {
  path:'/singin',
  element: <Singin></Singin>
  },
  {
  path:'*',
  element: <Error></Error>
  }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvaider>
    <RouterProvider router={router} />
  </AuthProvaider>
  </StrictMode>,
)
