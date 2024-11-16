import { ContextProvider } from "@/context";
import PropTypes from "prop-types";

export const AppProvider = ({ children }) => {
  return <ContextProvider>{children}</ContextProvider>;
};

AppProvider.propTypes = {
  children: PropTypes.element,
};
