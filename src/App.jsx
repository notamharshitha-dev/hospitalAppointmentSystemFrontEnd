import Example from './components/example'
import Navbar from './features/indexPage/navbar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import HomePage from './components/home/home'
function App() {
  return <div>
    <Navbar/>
    <Outlet/>
  </div>
}

export default App
