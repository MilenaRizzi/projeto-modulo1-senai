import styled from "styled-components";
// import { FormControlLabel } from '@mui/material';
import * as Checkbox from "@radix-ui/react-checkbox";

export const HomeContainer = styled.main`
  display: flex;
  padding: 1rem;
  justify-content: space-around;
  gap: 12rem;
  min-width: 100%;
  flex-wrap: wrap;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  display: wrap;

  h1 {
    margin-bottom: 1rem;
    padding: 0.5rem 1.75rem;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  div {
    display: flex;
  }
`
export const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: transparent;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  padding-left: 12px;
  font-size: 1.2rem;

`

export const BotaoFiltrar = styled.div`
    width: 200px;
    margin: 2rem auto;
    border: 3px solid black;
    border-radius: 8px;
    background: #ffec5c;
    font-weight: bold;
    padding: 0.25rem 0;
    font-size: 1.5rem;
    text-align: center;
`

export const NewRecipeButton = styled.button`
  margin-top: auto; /* Push the button to the bottom */
    padding: 1rem 1.1rem;
    border-radius: 100%;
    background: black;

  img {
    width: 35px;
  }
`;

export const Footer = styled.div`
  text-align: right;
  margin-right: 10px;
  
  img {
    width: 20vh;
  }
`;
