import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import{CarouselContainer, MovieTrack, StyledMovieCard, MoviePoster, MovieTitle} from "@/styles/MovieCarouselStyle";
import {Movie, MovieCarouselProps} from "@/interfaces/index";


const MovieCarousel: React.FC<MovieCarouselProps> = ({ movies }) => {
  const [duplicatedMovies, setDuplicatedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    if (movies.length > 0) {
      setDuplicatedMovies([...movies, ...movies]);
    }
  }, [movies]);

  return ( 
    <CarouselContainer>
      <MovieTrack
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 50, repeat: Infinity }}
      >
        {duplicatedMovies.map((movie, index) => (
          <StyledMovieCard key={`${movie.id}-${index}`}>
            <MoviePoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieCard movie={movie} />
          </StyledMovieCard>
          

        ))}
      </MovieTrack>
    </CarouselContainer>
  );
};

export default MovieCarousel;
