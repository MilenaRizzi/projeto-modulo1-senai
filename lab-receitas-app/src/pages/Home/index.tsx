import { CheckIcon } from "@radix-ui/react-icons";

import {
  HomeContainer,
  FilterContainer,
  Footer,
  NewRecipeButton,
  BotaoFiltrar,
  Label,
  CheckboxContainer,
  CheckboxRoot,
  CheckboxLabel,
  CheckboxIndicator,
} from "./styles";
import { ListRecipes } from "./components/ListRecipes";
import { Header } from "../../components/Header";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransationModal } from "../../components/NewTransactionModal";





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
                  <CheckboxLabel>
                    <CheckboxRoot defaultChecked id="semLeite">
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
                    <CheckboxRoot defaultChecked id="semGluten">
                      <CheckboxIndicator>
                        <CheckIcon fontSize={25} />
                      </CheckboxIndicator>
                    </CheckboxRoot>
                    <Label htmlFor="semGluten">Sem gluten.</Label>
                  </CheckboxLabel>
                </div>
                <CheckboxLabel>
                  <CheckboxRoot defaultChecked id="todos">
                    <CheckboxIndicator>
                      <CheckIcon fontSize={25} />
                    </CheckboxIndicator>
                  </CheckboxRoot>
                  <Label htmlFor="todos">Todos.</Label>
                </CheckboxLabel>
              </CheckboxContainer>
              <BotaoFiltrar>Filtrar</BotaoFiltrar>
            </form>
        </FilterContainer>
    

        <ListRecipes/>        
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewRecipeButton type="button">
              <img src="src\assets\plus.png" alt="" />
            </NewRecipeButton>
          </Dialog.Trigger>
          <NewTransationModal/>
        </Dialog.Root>
      </HomeContainer>
      <Footer>
        <img src="src\assets\logo-lab.png" alt="" />
      </Footer>
    </div>
  );
}
