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
import { gerarPorcentagem } from "../../utils/gerarPorcentagem";

export const HowMuchIsOf = () => {
  const [value01, setValue01] = useState<string>("");
  const [value02, setValue02] = useState<string>("");
  const [howMuchIsOf, setHowMuchIsOf] = useState<number>();

  useEffect(() => {
    if (value01 && value02) {
      const porcentagem = gerarPorcentagem(Number(value01));
      setHowMuchIsOf(porcentagem * Number(value02));
    } else {
      setHowMuchIsOf(undefined);
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
            Quero saber quanto é <strong>X</strong>% de <strong>Y</strong>
          </Text>
        </Alert>
      </Stack>

      <Stack direction={"row"} alignItems={"center"}>
        <Box>
          <FormLabel>Quanto é</FormLabel>
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
          <FormLabel>De</FormLabel>
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
            value={howMuchIsOf ? howMuchIsOf : "Aguardando valores"}
            bgColor="gray.800"
            color={"white"}
            readOnly
          />
        </Box>
      </Stack>
    </Box>
  );
};
