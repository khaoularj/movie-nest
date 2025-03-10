import React from "react";
import {MovieCardProps} from "@/interfaces/index";
import {
  MovieCard as StyledMovieCard,
  Card,
  Front,
  Back,
  BackContent,
  MovieTitle,
  MovieDescription,
  MovieInfo
} from "@/styles/MovieCardStyles";



const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <StyledMovieCard>
      <Card>
        <Front>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </Front>
        <Back>
          <BackContent>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieDescription>{movie.description}</MovieDescription>
            <MovieInfo>
              <span>Genre: {movie.genre}</span> <br />
              <span>Rating: {movie.rating}</span>
            </MovieInfo>
          </BackContent>
        </Back>
      </Card>
    </StyledMovieCard>
  );
};

export default MovieCard;
