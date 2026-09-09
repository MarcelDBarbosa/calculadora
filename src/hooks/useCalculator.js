import { useReducer } from "react";
import { calculate, formatNumber } from "../utils/calculator";

const initialState = {
  display: "0",
  expression: "",
  history: "",
  firstNumber: null,
  operator: null,
  waitingForOperand: false,
  justCalculated: false,
};

const getExpression = (state, secondNumber = state.display) =>
  `${state.firstNumber} ${state.operator} ${secondNumber}`;

const reducer = (state, action) => {
  switch (action.type) {
    case "DIGIT": {
      const shouldReplace =
        state.display === "Erro" ||
        state.waitingForOperand ||
        state.justCalculated;

      return {
        ...state,
        display:
          shouldReplace || state.display === "0"
            ? action.value
            : `${state.display}${action.value}`,
        expression: state.justCalculated
          ? action.value
          : `${state.expression}${action.value}`,
        history: state.justCalculated ? "" : state.history,
        firstNumber: state.justCalculated ? null : state.firstNumber,
        operator: state.justCalculated ? null : state.operator,
        waitingForOperand: false,
        justCalculated: false,
      };
    }

    case "DECIMAL": {
      if (
        state.display.includes(".") ||
        state.display === "Erro" ||
        state.justCalculated
      ) {
        return state.justCalculated
          ? { ...initialState, display: "0." }
          : state;
      }

      return {
        ...state,
        display: state.waitingForOperand ? "0." : `${state.display}.`,
        expression: state.justCalculated
          ? "0."
          : `${state.expression}${state.waitingForOperand ? "0." : "."}`,
        history: state.justCalculated ? "" : state.history,
        waitingForOperand: false,
        justCalculated: false,
      };
    }

    case "OPERATOR": {
      if (state.display === "Erro") {
        return initialState;
      }

      if (state.firstNumber !== null && state.operator && !state.waitingForOperand) {
        const result = calculate(state.firstNumber, state.operator, state.display);

        if (result === null) {
          return { ...initialState, display: "Erro" };
        }

        return {
          ...state,
          display: formatNumber(result),
          firstNumber: result,
          operator: action.value,
          expression: `${state.expression} ${action.value}`,
          history: "",
          waitingForOperand: true,
          justCalculated: false,
        };
      }

      const firstNumber = state.display;

      return {
        ...state,
        display: "0",
        firstNumber,
        operator: action.value,
        expression: `${firstNumber} ${action.value}`,
        history: "",
        waitingForOperand: true,
        justCalculated: false,
      };
    }

    case "EQUALS": {
      if (
        state.firstNumber === null ||
        state.operator === null ||
        state.waitingForOperand ||
        state.display === "Erro"
      ) {
        return state;
      }

      const expression = state.expression || getExpression(state);
      const result = calculate(state.firstNumber, state.operator, state.display);

      return {
        ...state,
        display: result === null ? "Erro" : formatNumber(result),
        expression: "",
        history: expression,
        firstNumber: null,
        operator: null,
        waitingForOperand: false,
        justCalculated: true,
      };
    }

    case "CLEAR_ENTRY": {
      if (state.display === "Erro") {
        return initialState;
      }

      if (state.waitingForOperand) {
        return {
          ...state,
          display: state.firstNumber,
          expression: String(state.firstNumber),
          firstNumber: null,
          operator: null,
          waitingForOperand: false,
        };
      }

      if (state.display.length <= 1 || state.display === "-0") {
        return {
          ...state,
          display: "0",
          expression: state.expression.slice(0, -1),
        };
      }

      return {
        ...state,
        display: state.display.slice(0, -1) || "0",
        expression: state.expression.slice(0, -1),
      };
    }

    case "CLEAR":
      return initialState;

    case "TOGGLE_SIGN": {
      if (state.display === "0" || state.display === "Erro") {
        return state;
      }

      return {
        ...state,
        display: state.display.startsWith("-")
          ? state.display.slice(1)
          : `-${state.display}`,
        expression: state.expression.replace(/-?\d+(?:\.\d+)?$/, (value) =>
          value.startsWith("-") ? value.slice(1) : `-${value}`
        ),
      };
    }

    case "PERCENT": {
      if (state.display === "Erro") {
        return state;
      }

      const percentExpression = state.expression.replace(
        /-?\d+(?:\.\d+)?$/,
        `${state.display}%`
      );

      return {
        ...state,
        display: formatNumber(Number(state.display) / 100),
        expression: percentExpression,
      };
    }

    default:
      return state;
  }
};

const useCalculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    display: state.display,
    expression: state.expression,
    history: state.history,
    onDigit: (value) => dispatch({ type: "DIGIT", value }),
    onDecimal: () => dispatch({ type: "DECIMAL" }),
    onOperator: (value) => dispatch({ type: "OPERATOR", value }),
    onEquals: () => dispatch({ type: "EQUALS" }),
    onClearEntry: () => dispatch({ type: "CLEAR_ENTRY" }),
    onClear: () => dispatch({ type: "CLEAR" }),
    onToggleSign: () => dispatch({ type: "TOGGLE_SIGN" }),
    onPercent: () => dispatch({ type: "PERCENT" }),
  };
};

export default useCalculator;
