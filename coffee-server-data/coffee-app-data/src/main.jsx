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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainleyaut></Mainleyaut>,
    children: [
    {
    path:'/',
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/coffee')
    },
    {
    path:'/AddCoffee',
    element:<AddCoffee></AddCoffee>
    },
    {
  path: '/ditails/:id',
  element: <DitailsCard></DitailsCard>,
  loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
  path: '/updatecoffee/:id',
  element: <UpdateCoffee></UpdateCoffee>,
  loader: ({params})=> fetch(`http://localhost:5000/coffee/${params.id}`)
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
    <RouterProvider router={router} />
  </StrictMode>,
)
