import { motion } from "framer-motion";
import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 20px 0;
  margin-bottom: 50px;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const MovieTrack = styled(motion.div)`
  display: flex;
  gap: 15px;
  will-change: transform;

  /* Responsive adjustments */
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

export const StyledMovieCard = styled.div`
  flex: 0 0 200px;
  height: 300px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  background: #222;

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    flex: 0 0 150px;
    height: 250px;
  }

  @media (max-width: 768px) {
    flex: 0 0 120px;
    height: 220px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  text-align: center;
  color: white;
  font-size: 1rem;
  margin-top: 8px;

  /* Responsive adjustments */
  @media (max-width: 1024px) {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;