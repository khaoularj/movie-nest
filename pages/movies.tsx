import { ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies } from "@/services/api";
import Navbar3 from "@/components/Navbar3";
import { BackgroundOverlay, FullScreenBackground, Footer, FooterContent, LogOutButton } from "@/styles/HomePageStyles";
import {MovieCard, PopularMovies, Back, MovieTitle, MovieDescription, CardContent, MovieRating, Poster} from "@/styles/MoviesPageStyles";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { Input } from "@/styles/ContactFormStyle";
import { saveFavorite } from "@/lib/firebaseConfig1";



interface Movie {
  genre_ids: any;
  rating: ReactNode;
  id: number;
  title: string;
  poster: string;
  description: string;
}

const MoviesPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [displayedMovies, setDisplayedMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchQuery, setSearchQuery] = useState<string>(""); 
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        router.push("/auth");
      } else {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, [router]);


  
  const loadMovies = async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newMovies = await fetchMovies(page);
      if (newMovies.length === 0) {
        setHasMore(false);
      } else {
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        setPage((prevPage) => prevPage + 1);
        setDisplayedMovies((prevMovies) => [...prevMovies, ...newMovies]);
      }
    } catch (error) {
      console.error("there's an error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };


  const handleFavoriteClick = async (movie: Movie) => {
    if (!user) {
      console.log("User is not logged in");
      return; 
    }
    await saveFavorite(user.uid, movie);
  };


  // to search movies by title
  const handleSearch = () => {
    let filteredMovies = [...movies];
    // filter by title
    if (searchQuery) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // new features will be added in the futur to filter by genre

     setDisplayedMovies(filteredMovies);
  };


  // loading initial movies
  useEffect(() => {
    if (user) loadMovies();
  }, [user]);


  // adding an intersection observer for infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMovies();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <Navbar3 />
      <BackgroundOverlay />
      <FullScreenBackground />

      <div style={{ padding: "20px", color: "white" }}>
        {/* <h1>Hello, {user.displayName || "User"}!</h1> */}
        
        <div style={{ marginBottom: "20px",display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
            style={{ padding: "10px", width: "250px",textAlign: "center" }}
          />
        </div>

        <PopularMovies>Popular Movies</PopularMovies>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {displayedMovies.map((movie, index) => (
            <MovieCard key={movie.id} ref={index === displayedMovies.length - 1 ? lastMovieRef : null}>
              <CardContent>
                <Poster>
                  <img src={movie.poster} alt={movie.title} />
                </Poster>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRating>⭐ {movie.rating}</MovieRating>
                <Back>
                  <MovieDescription>{movie.description}</MovieDescription>
                </Back>

              </CardContent>
              <LogOutButton style={{ 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center", 
                marginTop: "30px",
                margin: "0 auto" 
              }}  onClick={() => handleFavoriteClick(movie)}>Add to Favorites</LogOutButton>
            </MovieCard>
          ))}
        </div>

        {loading && <p style={{ padding: "20px", color: "white", textAlign: "center" }}>Loading more movies...</p>}
      </div>

      <Footer>
        <FooterContent>
          <p>&copy; 2025 MOVIENEST. All Rights Reserved.</p>
        </FooterContent>
      </Footer>
    </div>
  );
};

export default MoviesPage;