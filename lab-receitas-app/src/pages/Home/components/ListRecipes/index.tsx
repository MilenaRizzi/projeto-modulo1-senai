import { useContext } from "react";
import {
  EditeRecipeButton,
  ListContainer,
  Recipe,
  RecipeContainer,
} from "./styles";
import { RecipeContext } from "../../../../contexts/RecipeContext";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransationModal } from "../../../../components/NewTransactionModal";

// Seu código existente
interface Recipe {
  id: string;
  nameRecipe: string;
  ingredients: string;
  preparationInstructions: string;
  options: {
    lactose: boolean;
    gluten: boolean;
  };
}
export function ListRecipes() {
  // Adiciona estado para controlar a visibilidade do modal
  const { recipes } = useContext(RecipeContext);

  return (
    <ListContainer>
      <h1>Receitas Cadastradas</h1>
      <RecipeContainer>
        <div>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Recipe>
                <div>
                  <img src="src\assets\panela-quente.png" alt="" />
                  <p>{recipe.nameRecipe}</p>
                </div>
                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <EditeRecipeButton type="button">
                      <img src="src\assets\icone-de-informacoes.png" alt="" />
                    </EditeRecipeButton>
                  </Dialog.Trigger>
                  <NewTransationModal recipe={recipe}/>
                </Dialog.Root>
                {/* Adiciona evento de clique para abrir o modal */}
              </Recipe>
            </li>
          ))}
        </div>
      </RecipeContainer>
      {/* Renderiza o modal apenas se estiver aberto */}
    </ListContainer>
  );
}

// Seu código existente
