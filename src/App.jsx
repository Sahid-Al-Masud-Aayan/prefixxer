
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Aboutus from './Pages/Aboutus'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

function App() {
  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element= {<Services/>}/>
        <Route path='/gallery' element= {<Gallery/>}/>
        <Route path='/about us' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Error/>}/>
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
