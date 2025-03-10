import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {NavbarContainer1, LogoContainer, LogoImage, ButtonContainer, NavbarButton, ProfileButton} from "@/styles/NavbarStyle"
import {LogOutButton } from "@/styles/HomePageStyles";
import { onAuthStateChanged, signOut, User  } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";


export default function Navbar3() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };


  
  return (
    <NavbarContainer1>
      <LogoContainer onClick={() => router.push("/")}>
        <LogoImage src="/assets/nv_logo1.png" alt="logo"/>
      </LogoContainer>
      <ButtonContainer>        
        {user ? (
          <>
            <ProfileButton onClick={() => router.push("/movies")}>
              {/* <img src="/assets/profile-icon.png" alt="profile" style={{ width: "25px", borderRadius: "50%" }} /> */}
              Welcome, {user.displayName || "User"}
            </ProfileButton>
          </>
        ) : (
          <>
            {/* <NavbarButton onClick={() => router.push("/signup")}>Sign Up</NavbarButton>
            <NavbarButton onClick={() => router.push("/login")}>Login</NavbarButton> */}
          </>
        )}
        <NavbarButton onClick={() => router.push("/movies")}>Movie Recommendation</NavbarButton>
        <NavbarButton onClick={() => router.push("/favorites")}>My Favorite Movies ❤️</NavbarButton>
        <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
      </ButtonContainer>
    </NavbarContainer1>
  );
}
