import styled from "styled-components";


export const NavbarContainer = styled.nav`
  position: flex;
  top: 0;
  left: 0;
  right: 0;
  background-image: url("/assets/background2.png"); 

  /* to ensures that the background covers the entire navbar */
  background-size: cover;  
  background-position: center;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10; 
  height: 60px; 

  /* adding the black overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
     width: 100%;
     height: 100%;
    background: rgba(0, 0, 0, 0.6);
    
  }

  /* Ensure content appears above the overlay */
  > * {
    position: relative;
    z-index: 2;
`;

export const NavbarContainer1 = styled.nav`
  position: flex;
  top: 0;
  left: 0;
  right: 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
`;


export const LogoContainer = styled.div`
  align-items: center;
//   margin-top: -20px;
//   margin-bottom: -20px;
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const NavbarButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  color: transparent;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  /* apply gradient style to the text */
  background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;

  /* hover state */
  &:hover {
    transform: scale(1.05);
  }

  /* gradient underline */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 2px;
    background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  /* underline on hover */
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;