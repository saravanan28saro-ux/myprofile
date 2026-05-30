import styled from "styled-components";
   
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
        color:red;
        transform:scale(1.1);

    }
`   
export const H1=styled.h1`  
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(90deg, #ff0000, #ffff00, #00ff00, #0000ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size:70px;
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