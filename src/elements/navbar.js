import styled from 'styled-components';

export const  NavBar = styled.ul`
list-style-type: none;
text-align: center;
padding: 0;
border-top: 1px solid black;
border-bottom: 1px solid black;
overflow: hidden;
background-color: #ffff;
align-items: center;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
grid-column-start: 1;
grid-column-end: 12;
`;

export const  NavItemContent = styled.div`
display: none;
position: absolute;

background-color: white;
max-width: 160px;
min-width: 50px;
padding: 3px 3px;
margin-top: 10px;

z-index: 1;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const  NavItemContentLink = styled.a`
color: black;
padding: 12px 16px;

text-decoration: none;
display: block;
border-bottom: 1px solid black; 
&:last-child{
  border-bottom: none;
}
`;
export const  NavImage = styled.img`
border-bottom: none;
max-width: 130px;
position:absolute;
background-color: white;
z-index: 2;
top: 2px;
padding :20px ;

`;
export const  NavItem = styled.li`
/* float: left; */
display: inline-block;
color: black;
text-align: center;
padding: 14px 16px;
margin-right: 30px;
text-decoration: none;
&:hover{
  cursor: pointer;
}
&:hover ${NavItemContent}{
  
  display: block;
  
}


`;


export const  NavBarSideIContanier = styled.ul`
color: green;
position: absolute;

display: inline;
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
top: 20px;
left: 80px;

`;

export const  NavBarSideItem = styled.a`
float: left;
padding-right: 10px;
padding-left: 20px;
border-right: 2px solid black;
display:block;
font-weight: bold;
color:green;
text-decoration: none;

`;