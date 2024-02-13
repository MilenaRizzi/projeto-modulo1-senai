

import { EditeRecipeButton, ListContainer, ReceitaContainer } from "./styles";


export function ListRecipes() {


  return (
    <ListContainer>
      <h1>Receitas Cadastradas</h1>
      <ReceitaContainer>
        <div>
          <img src="src\assets\panela-quente.png" alt="" />
          <p>Strogonoff</p>
        </div>
        <EditeRecipeButton type="button">
          <img src="src\assets\icone-de-informacoes.png" alt="" />
        </EditeRecipeButton>
      </ReceitaContainer>
      <ReceitaContainer>
        <div>
          <img src="src\assets\panela-quente.png" alt="" />
          <p>Feijão</p>
        </div>
        <EditeRecipeButton type="button">
          <img src="src\assets\icone-de-informacoes.png" alt="" />
        </EditeRecipeButton>
   
      </ReceitaContainer>
    </ListContainer>
  );
}
