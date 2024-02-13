import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";
import imagemFundo from "../../assets/img-fundo.jpg";

//Quando eu quero estilizar um elemento do Dialog eu tenho que trazer a imprtação dele para ca e também chama-lo dentro dos parênteses

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: url(${imagemFundo}) center center no-repeat fixed;
  background-size: cover;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 1.5rem;
  z-index: 100; /* Garante que o header esteja acima de outros elementos */
`;

export const Wrapper = styled.div`
  /* Novo wrapper estilo */
  background: #ffec5c;

  border-radius: 8px;
  margin: 28px 0 22px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  width: 570px;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(-50%, -50%);

  background-color: black; /* Definindo o fundo como amarelo */
  border-radius: 20px; /* Arredondando a borda */
`;

export const RecipeFormContainer = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 0.18rem;
  width: 550px;

  form {
    width: 380px;
  }

  img {
    margin-bottom: 75px;
  }
`;


export const Title = styled(Dialog.Title)`
  margin: 1rem 0 0.75rem 0;
  padding-bottom: 0.5rem;
  text-align: center;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.35rem;

  #nameRecipe {
    height: 30px;
  }

  p {
    margin: auto;
    padding-right: 0.3rem;
    font-weight: bold;
  }

  textarea {
    height: 60px;
    width: 241px;
    resize: none; /* Impede que o usuário redimensione manualmente */
    padding: 0.35rem 0.5rem;
    border: 0;
    border-radius: 0.32rem;
    font-size: 0.85rem; /* Define o tamanho da fonte */
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    box-shadow: 2px 2px 0 0 rgba(128, 128, 128, 0.5); /* Exemplo de sombra cinza com 50% de opacidade */
  }
`;

export const CloseButton = styled(Dialog.DialogClose)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
`;

export const ButtonDiv = styled.div`
  display: flex;
  padding: 0.5rem;
  
 
`;

export const ButtonNewRecipe = styled.button`
  width: 34%;
  padding: 0.3rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: bold;
  margin-left: 12rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: green;
  } 


`;
