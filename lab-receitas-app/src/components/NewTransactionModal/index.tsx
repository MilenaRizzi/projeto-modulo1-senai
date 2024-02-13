import * as Dialog from "@radix-ui/react-dialog";
import { FormControlLabel, FormGroup } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { Header } from "../Header";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

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
  ButtonDiv,
} from "./styles";
import { useState } from "react";
import { X } from "phosphor-react";
// import { useState } from "react";

const newRecipeFormValidationSchema = zod.object({
  nameRecipe: zod.string().min(1, "Informe o nome da receita"),
  ingredients: zod.string().min(1, "Informe os ingredientes"),
  preparationInstructions: zod.string().min(1, "Informe o modo de preparo"),
  options: zod.object({
    lactose: zod.boolean(),
    gluten: zod.boolean(),
  }),
});

// interface NewRecipeFormData {
//   nameRecipe: string
//   ingredients: string
//   preparationInstructions: string
// }

type NewRecipeFormData = zod.infer<typeof newRecipeFormValidationSchema>;

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

export function NewTransationModal() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const { register, handleSubmit, reset, control } = useForm<NewRecipeFormData>(
    {
      resolver: zodResolver(newRecipeFormValidationSchema),
      defaultValues: {
        nameRecipe: "",
        ingredients: "",
        preparationInstructions: "",
        options: { lactose: false, gluten: false },
      },
    }
  );

  function handleCreateNewRecipe(data: NewRecipeFormData) {
    console.log(data);
    const newRecipe: Recipe = {
      id: String(new Date().getTime()),
      nameRecipe: data.nameRecipe,
      ingredients: data.ingredients,
      preparationInstructions: data.preparationInstructions,
      options: {
        lactose: data.options.lactose,
        gluten: data.options.gluten,
      },
    };

    setRecipes([...recipes, newRecipe]);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <Content>
        <Wrapper>
          <CloseButton> <X size={24} />{" "}</CloseButton>

          <Title>Adicionar receita</Title>
          <RecipeFormContainer>
            <form onSubmit={handleSubmit(handleCreateNewRecipe)}>
              <Infos>
                <p>Nome</p>
                <textarea id="nameRecipe" {...register("nameRecipe")} />
              </Infos>

              <Infos>
                <p>Ingredientes</p>
                <textarea id="ingredients" {...register("ingredients")} />
              </Infos>

              <Infos>
                <p>Modo de preparo</p>
                <textarea
                  id="preparationInstructions"
                  {...register("preparationInstructions")}
                />
              </Infos>

              <Infos>
                <p>Restrições</p>

                <FormGroup
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "px",
                  }}
                >
                  <Controller
                    name="options.lactose"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            onChange={(e) => {
                              field.onChange(e.target.checked);
                            }}
                            checked={field.value}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                            color="default"
                          />
                        }
                        label="Lactose"
                      />
                    )}
                  />
                  <Controller
                    name="options.gluten"
                    control={control}
                    render={({ field }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            {...field}
                            onChange={(e) => {
                              field.onChange(e.target.checked);
                            }}
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 32 } }}
                            color="default"
                          />
                        }
                        label="Gluten"
                      />
                    )}
                  />
                </FormGroup>
              </Infos>
              <ButtonDiv>
                <ButtonNewRecipe type="submit">Inserir</ButtonNewRecipe>
              </ButtonDiv>
            </form>
            <img src="src\assets\panela-quente-128.png" alt="" />
          </RecipeFormContainer>
        </Wrapper>
      </Content>
    </Dialog.Portal>
  );
}
