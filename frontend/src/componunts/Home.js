import IMG_SARO_1 from './imagedb/IMG_SARO_1.jpg';
import {Nav,Li, H1,Circle} from "./styledcomponunts";
const Home=()=>{
    return(
        <div>
            
            <div>
                <Nav >
                    <Li>Home</Li>
                    <Li>About</Li>
                    <Li>Qualifications</Li>
                    <Li>Skills</Li>
                    <Li>Contact</Li>
                </Nav>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",gap:"20px"}}>
                <H1 >Welcome to my Portfolio</H1>
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"}}>
                <Circle src={IMG_SARO_1} alt="Profile Image" />
                <Circle src={IMG_SARO_1} alt="Profile Image" />
                <Circle src={IMG_SARO_1} alt="Profile Image" />
            </div>
        </div>
    )
}
export default Home;



