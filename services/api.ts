import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";
const API_ROOT = "https://cinewhisper.up.railway.app";

interface MovieDetail {
    poster_path: string;
    overview: string;
    id: string;
    title: string;
    poster: string;
    description: string;
    rating: string;
}

// fetching movie list to use in the carousel from TMDB API
export const fetchTrendingMovies = async () => {
    const response = await axios.get(`${API_BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    return response.data.results;
};


// fetching movie list from cinewhisper API
export const fetchMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${API_ROOT}/movies/`, {
            params: { format: "json", page },
        });

        if (response.data && response.data.results) {
            return response.data.results.map((movie: any) => ({
                id: movie.id,
                title: movie.title || "Untitled",
                poster: movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/150",
                description: movie.overview || "No description available",
                rating: movie.vote_average || "N/A",
            }));
        }
        return [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};



// fetching movie details from cinewhisper API
// export const fetchMovieDetails = async (id: string) => {
//     try {
//         const response = await axios.get(`${API_ROOT}/movie/${id}`, {
//             params: {
//                 api_key: API_KEY,
//             },
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error fetching movie details:', error);
//         return null;
//     }
// };

export const fetchMovieDetails = async (id: string): Promise<MovieDetail> => {
    const response = await axios.get(`${API_ROOT}/movie/${id}`);
    const movie = response.data;

    // Ensure the data matches the MovieDetail format
    const formattedMovie: MovieDetail = {
        id: movie.id,
        title: movie.title || "Untitled",
        poster_path: movie.poster_path || "/default-poster.jpg", // Default if no poster path
        overview: movie.overview || "No description available",
        rating: movie.vote_average ? `${movie.vote_average}` : "N/A",
        poster: "",
        description: ""
    };

    return formattedMovie;
};


export const saveFavoriteMovie = (movie: any) => {
    let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
};


export const getFavoriteMovies = () => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
};