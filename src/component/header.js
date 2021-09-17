import React from 'react';
import {NavBar,NavItemContent,NavItemContentLink, NavImage, NavItem,NavBarSideIContanier,NavBarSideItem} from '../elements/navbar';
import {Container} from '../elements/general';

function Header() {
  return (
    
      <Container>
        <NavBarSideIContanier>
        <NavBarSideItem href="#"><img style={{width:"27px", color:"green"}} src="addFriend.png"/></NavBarSideItem>
          <NavBarSideItem href="#">العربية</NavBarSideItem>
        </NavBarSideIContanier>
      <NavBar>
        <NavItem>
        360 PLANNER
          <NavItemContent>
          <NavItemContentLink>Link 1</NavItemContentLink>
          <NavItemContentLink>Link 1</NavItemContentLink>
          <NavItemContentLink>Link 1</NavItemContentLink>
          </NavItemContent>
        </NavItem>
        <NavItem>
        HER
          <NavItemContent>
          dd
          </NavItemContent>
          <NavItemContent>
            dd
          </NavItemContent>
          <NavItemContent>
            dd
          </NavItemContent>
          <NavItemContent>
            dd
          </NavItemContent>
        </NavItem>
        <NavItem>
        HIM
        </NavItem>
        <NavItem>
        THE WEDDING
        </NavItem>
        
        <NavImage src= 'logo.png' />
        <span style={{padding:'100px'}}></span>
        <NavItem>
        VENDORS
        </NavItem>
        <NavItem>
        GALLERY
        </NavItem>
        <NavItem>
        IDEAS0 & MORE
        </NavItem>
      </NavBar>
    </Container>
  );
}

export default Header;
