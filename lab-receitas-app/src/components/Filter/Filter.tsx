import {
  ChakraProvider,
  CheckboxGroup,
  Checkbox,
  HStack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";


export function Filter() {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleCheckboxChange = (values: string[]) => {
    setSelectedValues(values);
  };

  return (
    <div>
    <h1>Filtrar:</h1>
    <div>
            <CheckboxGroup
              value={selectedValues}
              onChange={handleCheckboxChange}
              colorScheme="gray"
              size="lg"
            >
              <HStack  spacing={2} borderColor="black">
                <Checkbox borderColor="black">
                  <Text fontSize="md" fontWeight="bold">
                    Opción 1
                  </Text>
                </Checkbox>
                <Checkbox borderColor="black" value="option2">
                  <Text fontSize="md" fontWeight="bold">
                    Opción 2
                  </Text>
                </Checkbox>
              </HStack>
            </CheckboxGroup>
    </div>
    <button>Filtrar</button>
  </div>
  )
}