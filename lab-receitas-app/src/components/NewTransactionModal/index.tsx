import * as Dialog from "@radix-ui/react-dialog";
import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";

import { Header } from "../Header";

import {
  Content,
  Infos,
  Overlay,
  RecipeFormContainer,
  Title,
  CloseButton,
  HeaderWrapper,
  ButtonNewRecipe,
  Wrapper,
} from "./styles";
import { useState } from "react";

export function NewTransationModal() {
  const [options, setOptions] = useState({
    lactose: false,
    gluten: false,
    todos: false,
  });

  const handleChange = (name) => (event) => {
    setOptions({ ...options, [name]: event.target.checked });
  };

  return (
    <Dialog.Portal>
      <Overlay />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Content>
        <Wrapper>
          <CloseButton> {/* <X size={24} />{" "} */}</CloseButton>

          <Title>Adicionar receita</Title>
          <RecipeFormContainer>
            <form action="">
              <Infos>
                <p>Nome</p>
                <textarea id="name" />
              </Infos>
              <Infos>
                <p>Ingredientes</p>
                <textarea id="ingredients" />
              </Infos>
              <Infos>
                <p>Modo de preparo</p>
                <textarea id="modoPreparo" />
              </Infos>
              <Infos>
                <p>Restrições</p>
                <FormGroup style={{ display: 'flex',  flexDirection:'row', marginRight: '30px'}}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={options.lactose}
                        onChange={handleChange("lactose")}
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                        color="default"
                      />
                    }
                    label="Lactose"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={options.gluten}
                        onChange={handleChange("gluten")}
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                        color="default"
                      />
                    }
                    label="Gluten"
                  />
                </FormGroup>

               
              </Infos>
            </form>
            <img src="src\assets\panela-quente-128.png" alt="" />
          </RecipeFormContainer>
          <ButtonNewRecipe type="submit">Inserir</ButtonNewRecipe>
        </Wrapper>
      </Content>
    </Dialog.Portal>
  );
}
