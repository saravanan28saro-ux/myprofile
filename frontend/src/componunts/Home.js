import folder from './imagedb/folder.webp';
import friemdly from './imagedb/friendly.png';
import experience from './imagedb/experience.jpg';
import skilled from './imagedb/skilled.avif';
import images from './imagedb/images.png';
import {H1,Scircle} from "./styledcomponunts";
import About from "./About";
import Qualifications from "./Qualifications";
import Skills from "./Skills";
import Contact from "./Contact";
const Home=()=>{
    
    return(
        <div style={{padding:"20px",backgroundColor:"black"}}>
            <hr style={{height: "1px", borderWidth: 0, color: "gray", backgroundColor: "white"}}/>
            <div style={{display:"flex",justifyContent:"space-around",alignItems:"center",flexDirection:"column",color:"white",gap:"20px"}}>
                <H1 >I build my portfolio to showcase my skills and experience</H1>
                <p color="white">I create web applications that are user-friendly and visually appealing.</p>
                <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center",gap:"20px"}}>
                    
                    <Scircle src={friemdly} alt="Friendly Image" />
                    <Scircle src={experience} alt="Experience Image" />
                    <Scircle src={skilled} alt="Skilled Image" />
                    <Scircle src={images} alt="Images Image" />

                    <Scircle src={folder} alt="Folder Image" />
                </div>

            </div>
            <hr style={{height: "1px", borderWidth: 0, color: "gray", backgroundColor: "white" ,marginTop:"40px"}}/>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                
            </div>
            <About id="about"/>
            <Qualifications id="qualifications"/>
            <Skills id="skills"/>
            <Contact id="contact"/>
        </div>
    )
}
export default Home;



