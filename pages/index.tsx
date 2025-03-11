import { fetchTrendingMovies } from "@/services/api";
import { useState, useEffect, useMemo, useRef } from "react";
import MovieCarousel from "@/components/MovieCarousel";
import { Movie } from "@/interfaces/index";
import Navbar from "@/components/Navbar";
import {MotionHeroSection, MotionHeroTitle, LogoImage, MotionHeroPar, MovieSection, BackgroundOverlay, FullScreenBackground, AppContainer, GetStartedButton, Footer, FooterContent, AboutText , MotionAboutSection} from "@/styles/HomePageStyles";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import Image from 'next/image';

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});


export default function HomePage() {
  const router = useRouter();
  // const [user, setUser] = useState<any>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleStartBrowsing = () => {
    if (user) {
      router.push("/movies"); 
    } else {
      router.push("/auth");
    }
  };

  const [searchQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const trendingMovies = await fetchTrendingMovies();
      setMovies(trendingMovies);
    } catch (error) {
      console.error("Failed to fetch trending movies", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const storedScrollState = localStorage.getItem("isScrolled");
    if (storedScrollState) {
      setIsScrolled(JSON.parse(storedScrollState));
    }

    getMovies();

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
        localStorage.setItem("isScrolled", JSON.stringify(true));
      } else {
        setIsScrolled(false);
        localStorage.setItem("isScrolled", JSON.stringify(false));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchQuery = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchQuery ;
    });
  }, [movies, searchQuery]);

  return (
    <div>
      <Navbar />
      {isScrolled && <BackgroundOverlay />}
      <AppContainer />
      <FullScreenBackground />

      <MotionHeroSection $isScrolled={isScrolled} variants={container(0.5)} initial="hidden" animate="visible"/>

      <MovieSection>
        <div>
          <MotionHeroTitle whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.8 }}>
            <LogoImage src="/assets/nv_logo1.png" alt="MovieNest Logo" />
          </MotionHeroTitle>

          <MotionHeroPar whileInView={{ opacity: 1, y: 1 }} initial={{ opacity: 2, y: -100 }} transition={{ duration: 0.9 }}>
            Your favorite place for movie recommendations!
          </MotionHeroPar>
        </div>

        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <MovieCarousel movies={filteredMovies} />
        )}



      <MotionAboutSection id="about-section" ref={aboutSectionRef} whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.9 }}
        style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* <img src="/assets/nv_logo1.png" alt="MovieNest Logo" style={{ width: "500px", height: "400px", objectFit: "contain" }} /> */}
          <Image 
              src="/assets/nv_logo1.png" 
              alt="MovieNest Logo" 
              width={500} 
              height={400} 
              style={{ objectFit: 'cover' }} 
            />
        <AboutText>
          <br />
          Whether you&apos;re searching for trending films, personalized recommendations, or a place to save your all-time favorites, MovieNest has you covered. <br />
          
          This project is the Nexus Project, the final milestone in the ProDev Frontend ALX Program.<br />
          Built with Next.js for the frontend and powered by CineWhisper API, developed by my peers in the ProDev Backend ALX program.<br />
          MovieNest delivers a seamless and immersive movie discovery experience.<br />
          Our goal is to make movie exploration effortless and enjoyable with an intuitive interface and curated suggestions. <br />
          Dive into the world of cinema and find your next favorite movie with MovieNest!
        </AboutText>

      </MotionAboutSection>

      <GetStartedButton onClick={handleStartBrowsing}>Start browsing movies</GetStartedButton>
      <Footer>
        <FooterContent>
          <p>&copy; 2025 MOVIENEST. All Rights Reserved.</p> 
        </FooterContent>
      </Footer> 
    </MovieSection>
    </div> 
  );
}
