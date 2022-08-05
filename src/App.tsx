import { Container } from "@chakra-ui/react";
import { HowMuchIsOf } from "./components/HowMuchIsOf";
import { Nav } from "./components/Nav";
import { PercentageOver } from "./components/PercentageOver";

function App() {
  return (
    <>
      <Nav />
      <Container maxW="100%" p="1.5rem">
        <HowMuchIsOf />
        <PercentageOver />
      </Container>
    </>
  );
}

export default App;
