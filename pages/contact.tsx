import ContactForm from "../components/ContactForm";
import Navbar2 from "@/components/Navbar2";
import { Footer, FooterContent, BackgroundOverlay, FullScreenBackground, MotionHeroSection } from "@/styles/HomePageStyles";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const ContactPage = () => {

  return (
    <div>
      <Navbar2 /> 
      <BackgroundOverlay />
      <FullScreenBackground />
      <ContactForm />
      <Footer>
        <FooterContent>
          <p>&copy; 2025 MOVIENEST. All Rights Reserved.</p>
        </FooterContent>
      </Footer>
    </div>
  );
};

export default ContactPage;