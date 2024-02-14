import styled from "styled-components";

export const ListContainer = styled.div`
  min-width: 75vh;
  min-height: 70vh;
  border-radius: 2rem;

  background: #ffec5c;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
  

  h1 {
    padding-top: 2rem;
    margin-bottom: 1rem;
  }
`;

export const RecipeContainer = styled.div`

  li {
    list-style: none; 

  }

`
export const Recipe = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 1rem;
  max-width: 15rem;
  padding-top: 0.5rem;

  div {
    display: flex;
    align-items: center;

    img {
      width: 5.5vh;
    }
  }

  p {
    font-size: 1.3rem;
    line-height: 2rem;
    padding-top: 0.75rem;
    margin-left: 0.75rem;
  }
`;



export const EditeRecipeButton = styled.button`
    border: 0;
    background-color: transparent;
`;
