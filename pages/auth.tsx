import { useEffect, useState } from "react";
import { auth } from "@/lib/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import { BackgroundOverlay, AppContainer, FullScreenBackground, MotionHeroSection, GetStartedButton } from "@/styles/HomePageStyles";
import { InputSingUp, LabelSignUp } from "@/styles/ContactFormStyle";


const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const storedScrollState = localStorage.getItem("isScrolled");
    if (storedScrollState) setIsScrolled(JSON.parse(storedScrollState));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      localStorage.setItem("isScrolled", JSON.stringify(window.scrollY > 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
  
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName });
        router.push("/movies");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        router.push("/movies");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div>
      <Navbar />
      {isScrolled && <BackgroundOverlay />}
      <AppContainer />
      <FullScreenBackground />

      <MotionHeroSection $isScrolled={isScrolled}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        
        <div style={{display: "flex",justifyContent: "center",alignItems: "center",height: "100vh"}}>
          <form onSubmit={handleAuth} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <h1 style={{ color: "white", fontSize: "3rem", fontWeight: "600" }}>
              {isSignUp ? "Sign Up" : "Login"}
            </h1>
              {isSignUp && (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <LabelSignUp>Name *</LabelSignUp>
                  <InputSingUp
                    type="text"
                    placeholder="Enter your Name"
                    onChange={(e) => setDisplayName(e.target.value)}
                    value={displayName}
                    required
                    style={{ flex: 1 }}
                  />
                </div>
              )}

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <LabelSignUp>Email *</LabelSignUp>
                <InputSingUp
                  type="email"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                  style={{ flex: 1 }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <LabelSignUp>Password *</LabelSignUp>
                <InputSingUp
                  type="password"
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                  style={{ flex: 1 }}
                />
              </div>

              <GetStartedButton type="submit">
                {isSignUp ? "Sign Up" : "Login"}
              </GetStartedButton>
              <p style={{ color: "white"  }}>
                {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                <span 
                  onClick={() => setIsSignUp(!isSignUp)} 
                  style={{ cursor: "pointer", textDecoration: "underline" }}>
                  {isSignUp ? "Login here" : "Sign up here"}
                </span>
              </p>
          </form>

        </div>
      </MotionHeroSection>
    </div>
  );
};

export default AuthPage;