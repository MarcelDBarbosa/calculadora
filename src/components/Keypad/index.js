import Button from "../Buttons";
import { KeypadContainer, Row } from "./styles";

const Keypad = ({
  onDigit,
  onDecimal,
  onOperator,
  onEquals,
  onClearEntry,
  onClear,
  onToggleSign,
  onPercent,
}) => {
  const digit = (value) => () => onDigit(value);
  const operator = (value) => () => onOperator(value);

  return (
    <KeypadContainer>
      <Row>
        <Button label="7" onClick={digit("7")} />
        <Button label="8" onClick={digit("8")} />
        <Button label="9" onClick={digit("9")} />
        <Button label="C" onClick={onClearEntry} />
        <Button label="CE" onClick={onClear} />
      </Row>
      <Row>
        <Button label="4" onClick={digit("4")} />
        <Button label="5" onClick={digit("5")} />
        <Button label="6" onClick={digit("6")} />
        <Button label="*" onClick={operator("*")} />
        <Button label="/" onClick={operator("/")} />
      </Row>
      <Row>
        <Button label="1" onClick={digit("1")} />
        <Button label="2" onClick={digit("2")} />
        <Button label="3" onClick={digit("3")} />
        <Button label="+" onClick={operator("+")} />
        <Button label="-" onClick={operator("-")} />
      </Row>
      <Row>
        <Button label="0" onClick={digit("0")} />
        <Button label="." onClick={onDecimal} />
        <Button label="%" onClick={onPercent} />
        <Button label="+/-" onClick={onToggleSign} />
        <Button label="=" onClick={onEquals} />
      </Row>
    </KeypadContainer>
  );
};

export default Keypad;
