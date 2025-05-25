import { Outlet } from "react-router-dom"
import Header from "./components/custom/Header"


function App() {

  return (
    <div className="p-5">
    <Header className='mb-4'/>
     <Outlet/>  
    </div>
  )
}

export default App
