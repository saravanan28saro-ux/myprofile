import {Nav,Li} from "./styledcomponunts";
import {Link} from "react-router-dom";

const Header=()=>{
    return(
       <div> 
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"black",padding:20}}>
                        <Nav >
                            
                            <Link style={{textDecoration:"none",color:"white"}} to="/"><Li>Home</Li></Link>
                            <Link style={{textDecoration:"none",color:"white"}} to="/About"><Li>About</Li></Link>
                            <Link style={{textDecoration:"none",color:"white"}}  to="/Qualifications"><Li>Qualifications</Li></Link>
                            <Link style={{textDecoration:"none",color:"white"}}  to="/Skills"><Li>Skills</Li></Link>
                            <Link style={{textDecoration:"none",color:"white"}}  to="/Contact"><Li>Contact</Li></Link>
                        </Nav>
                     

                    </div>
  
                    </div>)}
export default Header;