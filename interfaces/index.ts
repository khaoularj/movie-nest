// Define the type for a movie
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    description: string;
    genre: string;
    rating: number;
}

export interface MovieCardProps {
    movie: {
        id: number;
        title: string;
        poster_path: string;
        description: string;
        genre: string;
        rating: number;
    };
}

export interface MovieCarouselProps {
    movies: Movie[];
}