# alx-project-nexus: **MovieNest - Movie Recommendation Web App**

## Overview
Welcome to the **Nexus Project**, the final project of the **ALX ProDev Frontend Engineering** program. 
MovieNest is a Movie Recommendation Web App built with Next.js, TypeScript, and Styled Components. The application provides users with personalized movie recommendations, allows them to search for movies by title, and save their favorite movies to a personal list.

## Features
The main objectives of this project are to:
- **Movie Recommendations:** Fetches trending and recommended movies from backend API.
- **User Authentication:** Integrates Firebase for user login and registration.
- **Favorites List:** Allows users to add and manage their favorite movies.
- **Search Functionality:** Users can search for movies by title.
- **Infinite Scroll:** Displays movies in a scrollable view, loading more movies as the user scrolls down the page.
- **Responsive and Interactive UI:** The app features a modern, responsive UI built with Styled Components, ensuring a smooth user experience on all devices.

## Technologies
  - **Next.js:** For server-side rendering and dynamic routing.
  - **TypeScript:** To ensure type safety and enhance development experience.
  - **Styled Components:** For styling the app in a modular, component-based way.
  - **Firebase Authentication:** Used for handling user authentication (signup, login, and logout).
  - **Axios:** For making HTTP requests to fetch data from external APIs.
  - **Backend cinewhisper API Integration:** To fetch trending and recommended movies.
  - **Intersection Observer API:** Used to implement infinite scroll functionality.

## Setup Instructions
 ### Prerequisites
 - Node.js (v16 or above)
 - npm or yarn (for package management)

 ### Install Dependencies
 #### Clone the repository:
 - git clone https://github.com/khaoularj/movie-nest.git
 - cd movienest

 #### Install dependencies:
 - npm run dev
 or
 - yarn dev

## Usage
 - **Sign up or log in:** Users must sign up or log in to start browsing movies.
   ![signup](https://github.com/user-attachments/assets/79324c34-d775-4282-9af3-30932a284d3c)
   ![login](https://github.com/user-attachments/assets/d5d9b520-8040-4d5e-a64d-ba15a5114633)

 - **Browse movies:** Movies are displayed in a grid format. Scroll down to load more movies automatically.
   ![movielist](https://github.com/user-attachments/assets/0ff4a88c-e804-4176-8e50-8babbbc9a5e7)

 - **Add to favorites:** Users can add movies to their favorites list for easy access later.
   ![favmovies](https://github.com/user-attachments/assets/023458b3-cdda-4dbc-a650-6557bf5aeef4)

 - **Search:** Search for movies by title to find your favorite films quickly.

## Deployment
The app is deployed on Vercel.
You can view the live app here: https://getmovienest.vercel.app/

## Video Demo
https://drive.google.com/file/d/1AOlN5Vg7zp_1AY_vcrb8dr9yCyItHVTJ/view

## NOTES!
Currently, there is an issue with the upload speed of the user's favorite list, causing delays in the process. I am actively working on resolving this, and a fix will be deployed soon!
