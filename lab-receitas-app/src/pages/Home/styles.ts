import styled from "styled-components";
// import { FormControlLabel } from '@mui/material';

export const HomeContainer = styled.main`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  gap: 12rem;
  min-width: 100%;
  flex-wrap: wrap;
`;

export const NewRecipeButton = styled.button`
  margin-top: auto; /* Push the button to the bottom */
    padding: 1rem 1.1rem;
    border-radius: 100%;
    background: black;
    cursor: pointer;

    &:hover {
      background-color: #292A36;
    }

    img {
    width: 37px;
  }
`;

export const Footer = styled.div`
  text-align: right;
  margin-right: 10px;
  
  img {
    width: 20vh;
  }
`;
