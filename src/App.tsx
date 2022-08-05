import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { Nav } from "./components/Nav";
import { HowMuchIsOf } from "./components/HowMuchIsOf";
import { PercentageOver } from "./components/PercentageOver";
import { DetermineThatNumber } from "./components/DetermineThatNumber";
import { PercentageIncrease } from "./components/PercentageIncrease";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Nav />

      <Container maxW="100%" p="1.5rem">
        <Header />

        <Accordion allowToggle>
          <AccordionItem>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={{ lg: "xl" }}>
                  Quero saber quanto é <strong>Valor X</strong> porcento do{" "}
                  <strong>Valor Y</strong>
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <HowMuchIsOf />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={{ lg: "xl" }}>
                  Possuo um <strong>Valor X</strong> e quero saber qual é sua
                  porcentagem em cima do <strong>Valor Y</strong>
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <PercentageOver />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={{ lg: "xl" }}>
                  Sabendo que <strong>Valor X</strong>% de um número equivale a{" "}
                  <strong>Valor Y</strong>, qual é o total do{" "}
                  <strong>Valor Y</strong>?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <DetermineThatNumber />
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <AccordionButton _expanded={{ bg: "green.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                <Text fontSize={{ lg: "xl" }}>
                  O valor era <strong>X</strong>, agora o valor é{" "}
                  <strong>Y</strong>, qual a porcentagem dessa diferença?
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <PercentageIncrease />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}

export default App;
