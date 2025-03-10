import styled from "styled-components";


export const MovieCard = styled.div`
  width: 20%;
  height: 20%;
  margin: 40px; /* Add space between cards */
  cursor: pointer;
  position: relative; /* For absolute positioning of the back */
  overflow: hidden; /* Hide any overflow content */

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    width: 30%; /* Increase the width on tablet */
  }

  @media (max-width: 768px) {
    width: 45%; /* Increase the width on mobile */
    margin: 20px; /* Adjust margin on mobile */
  }

  @media (max-width: 480px) {
    width: 90%; /* Take almost full width on very small screens */
    margin: 10px; /* Adjust margin further */
  }
`;

export const PopularMovies = styled.h1`
  padding: 14px 22px; /* Equivalent to px-4 py-2 */
  font-size: 2rem; /* Equivalent to text-sm */
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;

  /* Apply gradient to text */
  background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 1.5rem; /* Smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 1.2rem; /* Smaller font size on mobile */
  }
`;


export const CardContent = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 20px;
  transition: all 0.3s ease; /* Smooth transition for background */
`;


export const Poster = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;


export const MovieTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0;
  color: white;
  z-index: 1;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 16px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 14px; /* Smaller font size on mobile */
  }
`;


export const MovieRating = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  color: white;
  z-index: 1;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 11px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 10px; /* Smaller font size on mobile */
  }
`;


export const Back = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark background for description */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: white;
  opacity: 0;
  border-radius: 20px;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition */

  ${MovieCard}:hover & {
    opacity: 1;
    visibility: visible;
  }
`;


export const MovieDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
  font-weight: normal;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    font-size: 14px; /* Slightly smaller font size on tablets */
  }

  @media (max-width: 480px) {
    font-size: 12px; /* Smaller font size on mobile */
  }
`;