import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchMovieDetails } from "../services/api";
import Image from "next/image";

interface MovieDetail {
  title: string;
  poster_path: string;
  overview: string;
  rating: string;
}

const MovieDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieDetail | null>(null);

  useEffect(() => {
    if (id) {
      const getMovieDetails = async () => {
        const movieData = await fetchMovieDetails(id as string);
        setMovie(movieData);
      };

      getMovieDetails();
    }
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={750}
      />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetailPage;
