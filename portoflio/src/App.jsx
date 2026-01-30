import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import About from './Component/About/About'
import Contacts from './Component/contact/Contacts'
import Portfolio from './Component/portfolio/Portfolio'
import StartPoint from './Component/Start/StartPoint'
import "./index.css"
import NotFound from './Component/NotFound/NotFound'
import Layout from './Component/LayOut/LayOut'

let routs = createBrowserRouter([
  {path: "/", element: <Layout />,children:[
    {index: true, element: <StartPoint />},
    {path: "about", element: <About />},
    {path: "portfolio", element: <Portfolio />},
    {path: "contact", element: <Contacts />},
    {path: "*", element: <NotFound />},
  ]},
])

function App() {

  return (
    <>
      <RouterProvider router={routs} />
    </>
  )
}

export default App
