import styled from "styled-components";
import { motion } from "framer-motion";


export const HeroSection = styled.section<{ $isScrolled: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) =>
    props.$isScrolled
      ? "url('/assets/background2.png') no-repeat center center/cover"
      : "url('/assets/background2.png') no-repeat center center/cover"};
  text-align: center;
  padding: 0 20px;
  transition: background-image 0.7s ease-in-out;
  opacity: ${(props) => (props.$isScrolled ? 1 : 0.9)};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
    border-radius: 20px;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;
export const MotionHeroSection = motion.create(HeroSection);


export const HeroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;
`;
export const MotionHeroTitle = motion.create(HeroTitle);


export const LogoImage = styled.img`
  width: 500px;
  height: auto;
`;


export const HeroPar = styled.p`
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 0.02em;

  background: linear-gradient(to right, #fbcfe8, #64748b, #c084fc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  margin-top: -60px;
  margin-bottom: 60px;
`;
export const MotionHeroPar = motion.create(HeroPar);


// Search box styles
export const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  margin-right: 10px;
  width: 300px;
`;

export const GenreSelect = styled.select`
  padding: 10px 15px;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  background-color: #f39c12;
  color: white;
`;



export const MovieSection = styled.section`
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;
   margin-bottom: 20px;
`;


export const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  z-index: -2;
  height: 100vh;
  width: 100%;
  background: radial-gradient(
    ellipse 80% 80% at 50% -20%,
    rgba(120, 119, 198, 0.3),
    rgba(255, 255, 255, 0)
  );
  transition: background 0.5s ease;
`;


export const FullScreenBackground = styled.div`
  position: fixed;
  top: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
  background-color: #1e1e1e;
  transition: background-color 0.5s ease;
`;


export const AppContainer = styled.div`
  overflow-x: hidden;
  color: #d1d5db; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ::selection {
    background: #67e8f9;
    color: #155e75; 
  }
`;



export const GetStartedButton = styled.button`
  padding: 14px 22px; 
  font-size: 1rem; 
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px; 
  border: 1px solid #d1d5db; 
  transition: all 0.3s ease-in-out;
  margin-bottom: 40px;
  
  
  background: linear-gradient(to right, #fbcfe8, #64748b, #c084fc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  
  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-color: #9ca3af;
  }
`;




export const AboutSection = styled.div`
  text-align: center;
  padding: 40px;
  max-width: 900%;
  margin: 20px auto;
  font-weight: bold;
  background: linear-gradient(180deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;
   -webkit-background-clip: text;
   color: transparent;
`;

// export const AboutTitle = styled.h2`
//   font-size: 2rem;
//   margin-bottom: 15px;
// `;

export const AboutText = styled.p`
  font-size: 1.4rem;
  line-height: 2;
`;
export const MotionAboutSection = motion.create(AboutSection);


export const Footer = styled.footer`
  position: relative;
  width: 100%;
  transition: background 0.5s ease;
  color: white;
  padding: 2rem 0;
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // font-weight: semi-bold;
  font-size: 1.2rem;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0.5rem 0;
  font-weight: semi-bold;
  transition: color 0.3s ease;

  &:hover {
    color: #c084fc;
  }
`;