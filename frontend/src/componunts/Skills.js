import {Scircle} from "./styledcomponunts";
import html from './imagedb/html.png';
import css from './imagedb/css.png';
import react from './imagedb/react.png';
import nodejs from './imagedb/nodejs.png';
import js from './imagedb/js.png';
import mysql from './imagedb/mysql.png';
import python from './imagedb/python.png';
import boot from './imagedb/boot.webp';


const Skills = () => {
    const skills = [
        { name: 'HTML', image: html ,link:"https://certificates.ccbp.in/academy/static-website?id=PMOOQZKNYL" },
        { name: 'CSS', image: css ,link:"https://certificates.ccbp.in/academy/static-website?id=PMOOQZKNYL" },
        {name :'bootstrap',image:boot,link:"https://certificates.ccbp.in/academy/static-website?id=PMOOQZKNYL"},
        { name: 'JavaScript', image: js ,link:"https://certificates.ccbp.in/academy/dynamic-web-application?id=QSYHFTDQLJ" },
        { name: 'React', image: react ,link:"https://certificates.ccbp.in/academy/node-js?id=FOCJWXMGBF" },
        { name: 'Node.js', image: nodejs ,link:"https://certificates.ccbp.in/academy/node-js?id=FOCJWXMGBF" },
        { name: 'MySQL', image: mysql ,link:"https://certificates.ccbp.in/academy/introduction-to-databases?id=XHKXILSSVZ" },
        { name: 'Python', image: python ,link:"https://certificates.ccbp.in/academy/programming-foundations-with-python?id=HRVDKGASJQ" },
    ];

    return (
        <div style={{backgroundColor:'black',padding:20}}>
            <div>
    <hr style={{height: "1px", borderWidth: 0, color: "gray", backgroundColor: "white"}}/>
</div>
            <h1 style={{color:"white",textAlign:"center"}}>Skills</h1>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",color:"white",flexWrap:"wrap",gap:"20px"}}>
                                
                {skills.map((skill) => (
                    <div key={skill.name} style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <a href={skill.link} target="_blank" rel="noopener noreferrer">
                            <Scircle src={skill.image} alt={`${skill.name} logo`} />
                        </a>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )}
export default Skills;