import { ReactNode, useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies } from "@/services/api";
import Navbar3 from "@/components/Navbar3";
import { BackgroundOverlay, FullScreenBackground, Footer, FooterContent, LogOutButton } from "@/styles/HomePageStyles";
import { MovieCard, PopularMovies, Back, MovieTitle, MovieDescription, CardContent, MovieRating, Poster } from "@/styles/MoviesPageStyles";
import { auth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useRouter } from "next/router";
import { Input } from "@/styles/ContactFormStyle";
import { saveFavorite } from "@/lib/firebaseConfig1";
import Image from "next/image";

interface Movie {
  genre_ids: number[];
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


  // loading movies from the API
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
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) loadMovies();
  }, [user]);


  // fearch functionality
  const handleSearch = () => {
    let filteredMovies = [...movies];
    if (searchQuery) {
      filteredMovies = filteredMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setDisplayedMovies(filteredMovies);
  };


  // adding intersection observer for infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);
  const lastMovieRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading || !hasMore) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMovies();  // Load the next page of movies
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMovies]
  );

  if (!user) return <p>Loading...</p>;


  // adding save to fav list functionality
  const handleFavoriteClick = async (movie: Movie) => {
    if (!user) {
      console.log("User is not logged in");
      return; 
    }
    await saveFavorite(user.uid, movie);
  };

  return (
    <div>
      <Navbar3 />
      <BackgroundOverlay />
      <FullScreenBackground />

      <div style={{ padding: "20px", color: "white" }}>
        <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <Input
            type="text"
            placeholder="Search for a movie"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={handleSearch}
            style={{ padding: "10px", width: "250px", textAlign: "center" }}
          />
        </div>

        <PopularMovies>Popular Movies</PopularMovies>
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
          {displayedMovies.map((movie, index) => (
            <MovieCard key={movie.id} ref={index === displayedMovies.length - 1 ? lastMovieRef : null}>
              <CardContent>
                <Poster>
                  <Image src={movie.poster} alt={movie.title} width={500} height={750} />
                </Poster>
                <MovieTitle>{movie.title}</MovieTitle>
                <MovieRating>⭐ {movie.rating}</MovieRating>
                <Back>
                  <MovieDescription>{movie.description}</MovieDescription>
                </Back>
              </CardContent>
              <LogOutButton
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "30px",
                  margin: "0 auto"
                }}
                onClick={() => handleFavoriteClick(movie)}
              >
                Add to Favorites
              </LogOutButton>
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
