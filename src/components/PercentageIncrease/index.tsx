import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const PercentageIncrease = () => {
  const [value01, setValue01] = useState<string>("");
  const [value02, setValue02] = useState<string>("");
  const [percentageIncrease, setPercentageIncrease] = useState<
    number | string
  >();

  useEffect(() => {
    if (value01 && value02) {
      console.log("🚀 ~ value02", value02);
      console.log("🚀 ~ value01", value01);
      const calc01 = 100 * Number(value02);
      const result = calc01 / Number(value01) - 100;

      setPercentageIncrease(result);
    } else {
      setPercentageIncrease(undefined);
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
          <FormLabel>Valor era (X)</FormLabel>
          <Input
            type="number"
            value={value01}
            onChange={(e) => setValue01(e.target.value)}
            placeholder="Digite um número"
          />
        </Box>
        <Box>
          <FormLabel>Valor atual (Y)</FormLabel>
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
              value={
                percentageIncrease || percentageIncrease === 0
                  ? percentageIncrease
                  : "Aguardando valores"
              }
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
