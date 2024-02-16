import {
  HomeContainer,
  Footer,
  NewRecipeButton,
} from "./styles";
import { ListRecipes } from "./components/ListRecipes";
import { Header } from "../../components/Header";
import * as Dialog from "@radix-ui/react-dialog";

import { FilterRecipes } from "./components/FilterRecipes";
import { FilterRecipeContext } from "../../contexts/FilterRecipeContext";
import { useContext } from "react";
import { NewTransationModal } from "./components/NewTransactionModal";



export function Home() {
  const  {filteredRecipes, selectedCheckboxes,} = useContext(FilterRecipeContext)

  return (
    <div>
      <Header />
      <HomeContainer>
      <FilterRecipes/>
          {filteredRecipes.length === 0 && selectedCheckboxes.includes("semGluten") ? (
        <ListRecipes recipes={[]} /> // Renderiza uma lista vazia
      ) : (
        <ListRecipes recipes={filteredRecipes} /> // Renderiza a lista de receitas filtradas normalmente
      )}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewRecipeButton type="button" title="Cadastrar">
              <img src="src\assets\add.png" alt="" />
            </NewRecipeButton>
          </Dialog.Trigger>
          <NewTransationModal />
        </Dialog.Root>
      </HomeContainer>
      <Footer>
        <img src="src\assets\logo-lab.png" alt="" />
      </Footer>
    </div>
  );
}