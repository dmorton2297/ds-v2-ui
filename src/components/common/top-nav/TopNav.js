import React from 'react';
import PropTypes from 'prop-types';
import { NavItemContainer, NavigationBar, AppIconContainer, SideNavigation } from './styles';
import { useState } from 'react';


const propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
}

export const TopNav = ({ icon, title }) => {
  const [menuHover, setMenuHover] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  return (
    <NavigationBar>
      <AppIconContainer>
        <img src={icon} alt="app icon" height="50px" width="50px" />
      </AppIconContainer>
      <NavItemContainer>
        <p>{title}</p>
      </NavItemContainer>
      <NavItemContainer
        onClick={() => setMenuActive(!menuActive)}
        onMouseEnter={() => setMenuHover(true)}
        onMouseLeave={() => setMenuHover(false)}>
        <img src={menuHover ? 'menu-light.svg' : 'menu.svg'} height="40px" width="40px" alt="menu icon" />
      </NavItemContainer>
      <SideNavigation id={menuActive ? 'active' : ''}>

      </SideNavigation>
    </NavigationBar>
  );
};

TopNav.defaultProps = propTypes;

export default TopNav;

