import styled from "styled-components";


export const CheckboxContainer = styled.div`
   height: 35px;
   margin: 0px 4px;
   border-radius: 5px;
   
   background-color: ${props => props.checked ? '#black' : '#transparent'};
   
   display: flex;
   align-items: center;
`;

export const CheckboxGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
    div {
    display: flex;
    gap: 8px;
    margin-top: 2px;
      
  }
`

export const HiddenCheckbox = styled.input.attrs({type: 'checkbox'})`
   overflow: hidden;
   white-space: nowrap;
   width: 1px;
   height: 1px;
   margin: -1px;
   padding: 0;
`;
export const Texto = styled.label`
    font-size: 20px;
  
`;

export const StyledCheckbox = styled.label`
   width: 26px;
   height: 26px;
   margin-right: 6px;
   border-radius: 5px;
   background: transparent;
   border: 2px solid black;
   display: flex;
   justify-content: center;
   align-items: center;
   img {
      display: ${props => props.checked ? 'flex' : 'none'};
      filter: invert(75%) sepia(11%) saturate(6042%) hue- rotate(30deg) brightness(105%) contrast(68%);
   }
`;