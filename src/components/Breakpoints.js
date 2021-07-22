import { useMediaQuery } from "react-responsive";

export const NonMobile = ({ children }) => {
  return useMediaQuery({ minWidth: 768 }) ? children : null;
};
export const Mobile = ({ children }) => {
  return useMediaQuery({ maxWidth: 767 }) ? children : null;
};