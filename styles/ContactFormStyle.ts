import styled from 'styled-components';



export const StyledContactForm = styled.form`
  width: 100%;
  max-width: 90%; /* Adjust based on your design */
  margin: 0 auto; /* Center the form */
  padding: 15%;
  background-color: transparent; /* Optional: makes the form stand out */
  border-radius: 8px; /* Optional: adds rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: adds a shadow */
  z-index: 1;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border-radius: 20px;
  border: 3px solid #ccc;
  background-color: white;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 40px;
  margin: 20px 0;
  border-radius: 4px;
  border: 3px solid #ccc;
  background-color: white;
    
`;

export const Label = styled.label`
  padding: 10px 20px;
  font-size: 1rem;
  text-transform: uppercase;
  color: transparent; /* Make text transparent */
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  /* Apply gradient to the text */
  background: linear-gradient(-360deg, #fbcfe8, #cbd5e1, #c084fc);
  background-clip: text;



  


`;