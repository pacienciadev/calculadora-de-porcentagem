import {
  Alert,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const PercentageOver = () => {
  const [value01, setValue01] = useState<string>("");
  const [value02, setValue02] = useState<string>("");
  const [percentageOver, setPercentageOver] = useState<number>();

  useEffect(() => {
    if (value01 && value02) {
      const calc01 = Number(value02) * 100;
      const result = calc01 / Number(value01);

      setPercentageOver(result);
    } else {
      setPercentageOver(undefined);
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
      <Stack direction={"row"} alignItems={"center"} mb={4}>
        <Alert status="info" variant="left-accent">
          <Text>
            Possuo um valor de <strong>X</strong> e quero saber qual é sua
            porcentagem em cima do valor de <strong>Y</strong>
          </Text>
        </Alert>
      </Stack>

      <Stack direction={"row"} alignItems={"center"}>
        <Box>
          <FormLabel>Possuo um valor de</FormLabel>
          <Input
            type="number"
            value={value01}
            onChange={(e) => setValue01(e.target.value)}
            placeholder="Digite um número"
          />
        </Box>
        <Box>
          <FormLabel>Qual é sua porcentagem em cima do valor</FormLabel>
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
          <InputGroup>
            <Input
              variant="outline"
              value={percentageOver ? percentageOver : "Aguardando valores"}
              bgColor="gray.800"
              color={"white"}
              readOnly
            />
            <InputRightAddon children="%" />
          </InputGroup>
        </Box>
      </Stack>
    </Box>
  );
};
