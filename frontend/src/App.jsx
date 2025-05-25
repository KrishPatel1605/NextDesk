import { Outlet } from "react-router-dom"
import Header from "./components/custom/Header"


function App() {

  return (
    <div className="p-8">
    <Header/>
     <Outlet/>  
    </div>
  )
}

export default App
