import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFavorites} from "@/lib/firebaseConfig1"; 
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { DocumentData } from "firebase/firestore";
import Navbar3 from "@/components/Navbar3";
import { BackgroundOverlay, FullScreenBackground, MotionHeroPar } from "@/styles/HomePageStyles";
import { Back, CardContent, MovieCard, MovieDescription, MovieRating, MovieTitle, Poster } from "@/styles/MoviesPageStyles";
import Image from "next/image";


interface Movie {
  movieId: string;
  title: string;
  description: string;
  poster: string;
  rating: string;
}



const FavoritesPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth");
      } else {
        setUser(currentUser);
        const fetchUserFavorites = async () => {
          setLoading(true);
          const userFavorites: DocumentData[] | undefined = await getFavorites(currentUser.uid);
          if (userFavorites) {
            const typedFavorites: Movie[] = userFavorites.map((favorite) => ({
              movieId: favorite.movieId,
              title: favorite.title,
              description: favorite.description,
              poster: favorite.poster,
              rating: favorite.rating,
            }));
            setFavorites(typedFavorites);
          }
          setLoading(false);
        };
        fetchUserFavorites();
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div>
      <Navbar3 />
      <BackgroundOverlay />
      <FullScreenBackground />

      <div style={{ padding: "200px", color: "white" }}>
        <MotionHeroPar whileInView={{ opacity: 1, y: 1 }} initial={{ opacity: 2, y: -100 }} transition={{ duration: 0.9 }}>
          Hello, {user?.displayName || "User"}! <br /><br /> Here&apos;s your chosen movies to watch later
        </MotionHeroPar>

        {loading ? (
          <p style={{ padding: "20px", color: "white", textAlign: "center" }}>Loading your favorites...</p>
        ) : (
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {favorites.length === 0 ? (
              <p>No favorite movies yet.</p>
            ) : (
              favorites.map((movie) => (
                <MovieCard key={movie.movieId}>
                  <CardContent>
                    <Poster>
                      
                    <Image 
                      src={movie.poster} 
                      alt={movie.title} 
                      width={150} 
                      height={225} 
                      priority
                    />{/* <img src={movie.poster} alt={movie.title} width={150} /> */}
                    </Poster>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieRating>⭐ {movie.rating}</MovieRating>
                    <Back>
                      <MovieDescription>{movie.description}</MovieDescription>
                    </Back>
                  </CardContent>
                </MovieCard>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;