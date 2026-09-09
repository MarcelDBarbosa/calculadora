import Calculator from "./components/Calculator";
import useCalculator from "./hooks/useCalculator";
import { Container } from "./styles";

const App = () => {
  const calculator = useCalculator();

  return (
    <Container>
      <Calculator {...calculator} />
    </Container>
  );
};

export default App;
