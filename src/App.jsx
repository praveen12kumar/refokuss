import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
 

  return (
    <div className="w-screen h-screen bg-[#1F1E24] font-nunito flex ">
      <Routes>
        <Route path="/" element={<Home />} />


      </Routes>
    </div>
  )
}

export default App
