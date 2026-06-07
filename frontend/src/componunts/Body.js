import Home from "./Home";
import About from "./About";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import Contact from "./Contact";
import { Route ,Routes } from "react-router-dom";
const Body=()=>{
    return(
        <div>
            
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About/>} />
            <Route path="/Qualifications" element={<Qualifications />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            </Routes>
        </div>
        
    )
}
export default Body;
