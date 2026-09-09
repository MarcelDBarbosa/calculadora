import Display from "../Display";
import Keypad from "../Keypad";
import { Content } from "../../styles";

const Calculator = (props) => {
  return (
    <Content>
      <Display
        expression={props.expression}
        history={props.history}
        value={props.display}
      />
      <Keypad {...props} />
    </Content>
  );
};

export default Calculator;
