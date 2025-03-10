import ContactForm from "../components/ContactForm";
import Navbar2 from "@/components/Navbar2";
import { Footer, FooterContent, BackgroundOverlay, FullScreenBackground } from "@/styles/HomePageStyles";


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