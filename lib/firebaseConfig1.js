import { db } from "./firebaseConfig";
import { collection, addDoc, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";

const favoritesCollection = collection(db, "favorites");


// to save favorite movie to Firestore
export const saveFavorite = async (userId, movie) => {
  await addDoc(favoritesCollection, {
    userId,
    movieId: movie.id,
    title: movie.title,
    poster: movie.poster,
    description: movie.description,
    rating: movie.rating,
  });
};

// to fetch favorite movies for the logged in users
export const getFavorites = async (userId) => {
  const q = query(favoritesCollection, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  const favorites = querySnapshot.docs.map((doc) => doc.data());
  return favorites;
};


// to add fav movies to Firebase
export const addFavorite = async (userId, movie) => {
  if (!userId) return;

  const favoriteRef = db.collection("favorites").doc(userId);
  const userFavorites = await favoriteRef.get();

  if (userFavorites.exists) {
    await favoriteRef.update({
      movies: firebase.firestore.FieldValue.arrayUnion(movie),
    });
  } else {
    await favoriteRef.set({
      movies: [movie],
    });
  }
};
