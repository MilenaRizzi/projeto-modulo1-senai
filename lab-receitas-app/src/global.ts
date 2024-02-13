import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import imagemFundo from './assets/img-fundo.jpg';




export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      height: 100vh;
      position: relative; /* Adicione position relative */
      background-color: rgba(255, 255, 255, 0.85); /* Alterado para uma cor de fundo direta */
        overflow: auto; 
      background: black url(${imagemFundo}) center center no-repeat fixed;
      background-size: cover; 
    }
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100vw; /* Utilizando 100vw (viewport width) para garantir uma largura fixa em relação à largura da viewport. */
  min-height: 100vh; /* Utilizando 100vh (viewport height) para garantir uma altura fixa em relação à altura da viewport. */
`;
