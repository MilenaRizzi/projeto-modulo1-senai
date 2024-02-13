

import { useContext } from "react";
import { EditeRecipeButton, ListContainer, Recipe, RecipeContainer } from "./styles";
import { RecipeContext } from "../../../../contexts/RecipeContext";


export function ListRecipes() {

  const { recipes } = useContext(RecipeContext)


  return (
    <ListContainer>
      <h1>Receitas Cadastradas</h1>

      <RecipeContainer>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Recipe>
              <div>
                <img src="src\assets\panela-quente.png" alt="" />
                <p>{recipe.nameRecipe}</p>
              </div>
              <EditeRecipeButton type="button">
                <img src="src\assets\icone-de-informacoes.png" alt="" />
              </EditeRecipeButton>
            </Recipe>
          </li>
        ))}
      </RecipeContainer>
    </ListContainer>
  );
}
