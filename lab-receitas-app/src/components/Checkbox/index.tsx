import { CheckIcon } from "@radix-ui/react-icons";
import {
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxRoot,
  Label,
} from "./styles";

interface CheckboxProps {
  idInput: string;
  htmlFor: string;
  textLabel: string;
}

export function Checkbox({ idInput ,htmlFor, textLabel  }: CheckboxProps) {
  return (
    <CheckboxLabel>
      <CheckboxRoot defaultChecked id={idInput}>
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </CheckboxRoot>
      <Label htmlFor={htmlFor}>{textLabel}</Label>
    </CheckboxLabel>
  );
}
