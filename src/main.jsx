import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ViewStories from './ViewStories.jsx'
import Profile from './Profile.jsx'
// import { StrictMode } from 'react'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/storys/:id/:tot',
      element:<ViewStories />
    },{
      path:'/profile',
      element:<Profile/>
    }
  ])



createRoot(document.getElementById('root')).render(
   
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>

  
)
