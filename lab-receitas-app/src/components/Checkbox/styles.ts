import styled from "styled-components";
import * as Checkbox from "@radix-ui/react-checkbox";

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;

  div {
    display: flex;
  }
`
export const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;
`

export const CheckboxRoot = styled(Checkbox.Root)`
  background-color: transparent;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;

`

export const CheckboxIndicator = styled(Checkbox.Indicator)`
  display: flex;
  align-items: center;
`

export const Label = styled.label`
  padding-left: 12px;
  font-size: 1.2rem;
  width: 145px;
`