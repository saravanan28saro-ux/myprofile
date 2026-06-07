import {Aboutcom,Circle} from "./styledcomponunts";
import IMG_SARO_1 from './imagedb/IMG_SARO_1.jpg';

const About=()=>{
    return(
        <div style={{backgroundColor:'black'}}>
            <Aboutcom style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"40px",flexDirection:"column"}}> 
               
        <div>
            
            <Circle src={IMG_SARO_1} alt="Profile Image" />
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:"20px",justifyContent:"center",alignItems:"center"}}>
            <h1>About Me</h1>
            
            <p>Hi, I'm Saravanan, a passionate web developer with a love for creating dynamic and user-friendly websites. With a strong background in HTML, CSS,JavaScript,react.js and node.js . I enjoy bringing ideas to life through code. I have experience working on various projects, from small personal websites to larger applications. I'm always eager to learn new technologies and improve my skills. In my free time, I enjoy exploring new frameworks and contributing to open-source projects.</p>
            
        </div>
        
    
        
        </Aboutcom>
        <hr style={{height: "1px", borderWidth: 0, color: "gray", backgroundColor: "white"}}/>
        </div>

    )
}
export default About;