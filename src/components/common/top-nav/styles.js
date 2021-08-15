import styled from 'styled-components';

export const NavigationBar = styled('div')`
  height: 70px;
  background-color: black;
  display: grid;
  grid-template-columns: 70px auto 60px;
`;

export const NavItemContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

export const AppIconContainer = styled('div')`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const SideNavigation = styled('div')`
  height: calc(100vh - 70px);
  background-color: yellow;
  width: 300px;
  right: -300px;
  top: 70px;
  position: absolute;
  transition: 0.2s;

  &#active {
    right: 0px;
  }
`;