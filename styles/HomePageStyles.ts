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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    height: 80vh;
    padding: 0 10px;
  }
`;
export const MotionHeroSection = motion.create(HeroSection);


export const HeroTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -40px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    margin-top: -20px;
  }
`;
export const MotionHeroTitle = motion.create(HeroTitle);



export const LogoImage = styled.img`
  width: 500px;
  height: auto;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 80%;
  }
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-top: -40px;
    margin-bottom: 40px;
  }
`;
export const MotionHeroPar = motion.create(HeroPar);


export const MovieSection = styled.section`
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin-bottom: 20px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 20px 10px;
  }
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    height: 80vh;
  }
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 0.9rem;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 18px;
  }
`;

export const LogOutButton = styled.button`
  padding: 2px 16px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  transition: all 0.3s ease-in-out;
  background: linear-gradient(to right, #fbcfe8, #64748b, #c084fc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-color: #9ca3af;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 0.8rem;
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const AboutText = styled.p`
  font-size: 1.4rem;
  line-height: 2;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
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

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FooterLinks = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 15px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #ffffff;

  &:hover {
    color: #fbcfe8;
  }
`;
