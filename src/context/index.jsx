import PropTypes from "prop-types";
import { createContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext = createContext();

function ContextProvider({ children }) {
  const initialValues = {
    user: null,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "UpdateUser":
        return { user: action.payload };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialValues);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export { ContextProvider, DispatchContext, StateContext };
