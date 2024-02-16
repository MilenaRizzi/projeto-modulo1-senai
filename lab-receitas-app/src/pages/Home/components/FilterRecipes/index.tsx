import { useContext, useEffect } from "react";
import {
  FilterContainer,
  FilterButton,
  Label,
  CheckboxContainer,
  CheckboxRoot,
  CheckboxLabel,
  CheckboxIndicator,
} from "./styles";
import { CheckIcon } from "@radix-ui/react-icons";
import { FilterRecipeContext } from "../../../../contexts/FilterRecipeContext";
import { RecipeContext } from "../../../../contexts/RecipeContext";

type CheckboxAction = "semLeite" | "semGluten" | "todos";

export function FilterRecipes() {

  const { recipes } = useContext(RecipeContext);

  const  { setFilteredRecipes, selectedCheckboxes, setSelectedCheckboxes} = useContext(FilterRecipeContext)


  function handleCheckboxClick(id: CheckboxAction) {
    setSelectedCheckboxes((prevSelected) => {
      if (id === "semLeite") {
        if (!prevSelected.includes("semLeite")) {
          return prevSelected.includes("semGluten") ? ["semLeite", "semGluten"] : ["semLeite"];
        } else {
          return prevSelected.filter((checkbox) => checkbox !== "semLeite") as CheckboxAction[];
        }
      }
      if (id === "semGluten") {
        if (!prevSelected.includes("semGluten")) {
          return prevSelected.includes("semLeite") ? ["semLeite", "semGluten"] : ["semGluten"];
        } else {
          return prevSelected.filter((checkbox) => checkbox !== "semGluten") as CheckboxAction[];
        }
      }
      return ["todos"];
    });
  }
  
  function handleFilterClick() {
    const semLeiteChecked = selectedCheckboxes.includes("semLeite");
    const semGlutenChecked = selectedCheckboxes.includes("semGluten");
    const todosChecked = selectedCheckboxes.includes("todos");
  
    const filtered = recipes.filter((recipe) => {
      if (todosChecked) {
        return true; // Retorna verdadeiro se todos os filtros estiverem marcados
      }
  
      // Verifica se ambas as opções estão marcadas
      if (semLeiteChecked && semGlutenChecked) {
        return !recipe.options.lactose && !recipe.options.gluten;
      }
  
      // Verifica individualmente os filtros e suas condições
      if (semLeiteChecked && !recipe.options.lactose) {
        return true; // Retorna verdadeiro se semLeite estiver marcado e a receita não tiver lactose
      }
      if (semGlutenChecked && !recipe.options.gluten) {
        return true; // Retorna verdadeiro se semGluten estiver marcado e a receita não tiver glúten
      }
  
      // Adicione mais condições de filtro conforme necessário...
  
      return false; // Se nenhuma condição de filtro corresponder, retorna falso
    });
  
    setFilteredRecipes(filtered);
  }
  
    // Efeito para limpar a lista de receitas filtradas sempre que 'recipes' for atualizado
    useEffect(() => {
      const clearFilteredRecipes = () => {
        setFilteredRecipes(recipes);
      };
    
      clearFilteredRecipes();
    }, [recipes]);
    


  return (
    <FilterContainer>
    <h1>Filtrar:</h1>
    <CheckboxContainer>
      <div>
        <CheckboxLabel>
          <CheckboxRoot
            checked={selectedCheckboxes.includes("semLeite")}
            id="semLeite"
            onClick={() => handleCheckboxClick("semLeite")}
          >
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label htmlFor="semLeite">
            Sem derivados <br />
            de leite.
          </Label>
        </CheckboxLabel>
        <CheckboxLabel>
          <CheckboxRoot
            checked={selectedCheckboxes.includes("semGluten")}
            id="semGluten"
            onClick={() => handleCheckboxClick("semGluten")}
          >
            <CheckboxIndicator>
              <CheckIcon fontSize={25} />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label htmlFor="semGluten">Sem gluten.</Label>
        </CheckboxLabel>
      </div>
      <CheckboxLabel>
        <CheckboxRoot
          checked={selectedCheckboxes.includes("todos")}
          id="todos"
          onClick={() => handleCheckboxClick("todos")}
        >
          <CheckboxIndicator>
            <CheckIcon fontSize={25} />
          </CheckboxIndicator>
        </CheckboxRoot>
        <Label htmlFor="todos">Todos.</Label>
      </CheckboxLabel>
    </CheckboxContainer>
    <FilterButton onClick={handleFilterClick}>Filtrar</FilterButton>
  </FilterContainer>

  )

}