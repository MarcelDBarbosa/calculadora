import { DisplayContainer, Expression, Value } from "./styles";

const Display = ({ expression, history, value }) => {
  return (
    <DisplayContainer>
      <Expression>{history}</Expression>
      <Value>{expression || value}</Value>
    </DisplayContainer>
  );
};

export default Display;
