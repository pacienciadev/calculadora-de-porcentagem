import { Avatar, Heading, Text } from "@chakra-ui/react";
import { FcCalculator } from "react-icons/fc";

export const Header = () => {
  return (
    <Heading
      lineHeight={1.1}
      fontWeight={600}
      fontSize={{ base: "3xl", sm: "4xl", lg: "4xl" }}
      mt={7}
      mb={10}
      textAlign="center"
    >
      <Text>
        <Avatar icon={<FcCalculator size="2.5rem" />} mr={4} />
        Escolha uma opção abaixo
      </Text>
    </Heading>
  );
};
