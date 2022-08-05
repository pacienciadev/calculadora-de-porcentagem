import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box py={10}>
      <Flex
        align={"center"}
        _before={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          mr: 8,
        }}
        _after={{
          content: '""',
          borderBottom: "1px solid",
          borderColor: useColorModeValue("gray.200", "gray.700"),
          flexGrow: 1,
          ml: 8,
        }}
      >
        <Heading as="h1" size="sm" textTransform={"uppercase"}>
          Calculadora de Porcentagem
        </Heading>
      </Flex>
      <Text pt={6} fontSize={"lg"} textAlign={"center"}>
        Feito com{" "}
        <Link href="https://vitejs.dev/" color="green.400" isExternal>
          Vite
        </Link>{" "}
        e{" "}
        <Link href="https://chakra-ui.com" color="green.400" isExternal>
          ChakraUI
        </Link>{" "}
        <br />
        Por{" "}
        <Link href="https://github.com/ursones" color="green.400" isExternal>
          Rafael Eduardo
        </Link>{" "}
        ❤
      </Text>
    </Box>
  );
};
