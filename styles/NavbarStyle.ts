import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background-image: url("/assets/background2.png");
  background-size: cover;
  background-position: center;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  height: 60px;

  /* Black overlay */
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
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    padding: 15px;
    height: 50px; /* Adjust height on tablets */
  }

  @media (max-width: 768px) {
    padding: 10px;
    height: 45px; /* Adjust height on smaller screens */
    flex-direction: column; /* Stack content vertically */
    justify-content: center;
  }

  @media (max-width: 480px) {
    height: 40px; /* Adjust height on very small screens */
    flex-direction: column; /* Stack content vertically */
  }
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }
`;

export const LogoContainer = styled.div`
  align-items: center;

  /* Adjust logo position on small screens */
  @media (max-width: 768px) {
    margin-bottom: 10px; /* Add space below the logo */
  }
`;

export const LogoImage = styled.img`
  width: 300px;
  height: auto;

  /* Adjust logo size on smaller screens */
  @media (max-width: 1024px) {
    width: 250px;
  }

  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 480px) {
    width: 150px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;

  /* Adjust button container layout on smaller screens */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px; /* Reduce the gap between buttons on smaller screens */
  }

  @media (max-width: 480px) {
    gap: 10px; /* Further reduce the gap on very small screens */
  }
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

  /* Apply gradient style to the text */
  background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;

  /* Hover state */
  &:hover {
    transform: scale(1.05);
  }

  /* Gradient underline */
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

  /* Underline on hover */
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    font-size: 0.9rem; /* Smaller font size on tablets */
    padding: 8px 18px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller font size on mobile */
    padding: 7px 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Smaller font size on very small screens */
    padding: 6px 12px;
  }
`;

export const ProfileButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  color: transparent;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  /* Apply gradient style to the text */
  background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    font-size: 0.9rem; /* Smaller font size on tablets */
    padding: 8px 18px;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem; /* Smaller font size on mobile */
    padding: 7px 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem; /* Smaller font size on very small screens */
    padding: 6px 12px;
  }
`;