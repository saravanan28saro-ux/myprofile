
import styled from 'styled-components';
   
export const Nav=styled.ul`
    display:flex;
    margin-top:40px;
    justify-content:center;
    list-style:none;
    gap:20px;

    font-weight:bold;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;   
`

export const Li=styled.li`
    cursor:pointer;
    transition:color 0.3s ease;
    
    &:hover{
        color:blue;
        transform:scale(1.1);

    }
`   
export const H1=styled.h1`  
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
    font-size:7vh;
    transition: 0.3s ;
    margin-left:20vh;
    margin-right:20vh;
    text-align:center;
    margin-bottom:0;

    &:hover{
    color:blue;
    transform:scale(1.1);
`   
export const Circle=styled.img`
margin:20px;
    width:30vh;
    height:30vh;
    border-radius:50%;
    object-fit:cover;
    transition:transform 0.3s ease;
    &:hover{
        transform:scale(1.1);   }
`


export const Scircle = styled.img`
  margin: 20px;
  width: 10vh;
  height: 10vh;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;

  

  &:hover {
    transform: scale(1.1);
  }
`;
export const Aboutcom=styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color:white;
    gap:20px;
    
    padding:20px; 
    background-color:black
    background-size:fill;
    ; 
     `
export const Box=styled.div`
    background-color:white;
    padding:20px;
    border-radius:10px;
    font-size:20px;
    text-align:center;
    width:50vh;
    height:7vh;
    margin:20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition:transform 0.3s ease;
    &:hover{
        transform:scale(1.1);
    }
`