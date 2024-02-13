import {
  HomeContainer,
  FilterContainer,
  Footer,
  NewRecipeButton,
  BotaoFiltrar,
  CheckboxContainer,
} from "./styles";
import { ListRecipes } from "./components/ListRecipes";
import { Header } from "../../components/Header";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransationModal } from "../../components/NewTransactionModal";
import { Checkbox } from "../../components/Checkbox";

// display: flex;
// flex-direction: row;

export function Home() {
  // const [checked, setChecked] = React.useState(false);

  // function handleCheckboxChange() {
  //   setChecked(!checked);
  // }
  return (
    <div>
      <Header />
      <HomeContainer>
        <FilterContainer>
          <h1>Filtrar:</h1>
          <form>
            <CheckboxContainer>
              <div>
              <Checkbox idInput="semLeite" htmlFor="semLeite" textLabel="Sem divados de leite"
              />

              <Checkbox idInput="semGluten" htmlFor="semGluten" textLabel="Sem gluten"
             />
              </div>

              <Checkbox idInput="todos" htmlFor="todos" textLabel="Todos"
              />
            </CheckboxContainer>
            <BotaoFiltrar>Filtrar</BotaoFiltrar>
          </form>
        </FilterContainer>

        <ListRecipes />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewRecipeButton type="button">
              <img src="src\assets\plus.png" alt="" />
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
