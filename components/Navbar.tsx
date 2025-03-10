import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {NavbarContainer, LogoContainer, LogoImage, ButtonContainer, NavbarButton} from "@/styles/NavbarStyle";



export default function Navbar() {
  const router = useRouter();
  const [aboutRef, setAboutRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // this option is to get the about section element once the component mounts
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) setAboutRef(aboutSection);
  }, []);

  const scrollToAbout = () => {
    if (aboutRef) {
      aboutRef.scrollIntoView({ behavior: "smooth" });
    } else {
      // this option is to navigate to home first, then scroll to about section
      router.push("/").then(() => {
        setTimeout(() => {
          document.getElementById("about-section")?.scrollIntoView({ behavior: "smooth" });
        }, 300); 
      });
    }
  };


  return (
    <NavbarContainer>
      <LogoContainer onClick={() => router.push("/")}>
        <LogoImage src="/assets/nv_logo1.png" alt="logo"/>
      </LogoContainer>

        <ButtonContainer>
          <NavbarButton onClick={() => router.push("/movies")}>Movie Recommendation</NavbarButton>
          <NavbarButton onClick={scrollToAbout}>About Us</NavbarButton>
          <NavbarButton onClick={() => router.push("/contact")}>Contact us</NavbarButton>
          <NavbarButton onClick={() => router.push("/auth")} className="gradient">Join Now</NavbarButton>
        </ButtonContainer>

    </NavbarContainer>
  );
}
