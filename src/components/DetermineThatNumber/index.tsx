import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const DetermineThatNumber = () => {
  const [value01, setValue01] = useState<string>("");
  const [value02, setValue02] = useState<string>("");
  const [determineThatNumber, setDetermineThatNumber] = useState<number>();

  useEffect(() => {
    if (value01 && value02) {
      const calc01 = 100 * Number(value02);
      const result = calc01 / Number(value01);

      setDetermineThatNumber(result);
    } else {
      setDetermineThatNumber(undefined);
    }
  }, [value01, value02]);

  return (
    <Box
      border={"solid"}
      borderColor="gray.200"
      borderWidth={2}
      p="6"
      pt="4"
      borderRadius="5"
      mb={6}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <Box>
          <FormLabel>Valor percentual (X)</FormLabel>
          <InputGroup>
            <Input
              type="number"
              value={value01}
              onChange={(e) => setValue01(e.target.value)}
              placeholder="Digite um número"
            />
            <InputRightAddon children="%" />
          </InputGroup>
        </Box>
        <Box>
          <FormLabel>Qual é sua porcentagem em cima do valor (Y)</FormLabel>
          <Input
            placeholder="Digite um número"
            type="number"
            value={value02}
            onChange={(e) => setValue02(e.target.value)}
          />
        </Box>
      </Stack>

      <Stack direction={"row"} alignItems={"center"} mt={6}>
        <Box>
          <FormLabel>Resultado</FormLabel>
          <Input
            variant="outline"
            value={
              determineThatNumber ? determineThatNumber : "Aguardando valores"
            }
            bgColor="gray.800"
            color={"white"}
            readOnly
          />
        </Box>
      </Stack>
    </Box>
  );
};
