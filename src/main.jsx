import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DoctorsPage from './components/Doctors/doctors.jsx'
import HomePage from './components/home/home.jsx'
import AboutPage from './components/About/about.jsx'
import GalleryPage from './components/Gallery/gallery.jsx'
import ContactPage from './components/Contact/contact.jsx'
const router=createBrowserRouter([  
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/doctorsPage",
        element:<DoctorsPage/>
      },
      {
        path:"/homePage",
        element:<HomePage/>
      },
      {
        path:"/contactPage",
        element:<ContactPage/>
      },
      {
        path:"/aboutPage",
        element:<AboutPage/>
      },
      {
        path:"/galleryPage",
        element:<GalleryPage/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} ></RouterProvider>
   
  
)
