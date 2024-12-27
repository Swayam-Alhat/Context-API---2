import { useContext, createContext } from "react";

// creates the actual context.
export const ThemeContext = createContext({
  theme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
// creates a context provider
export const ThemeProvider = ThemeContext.Provider;

// And this is custom hook that will return the themeContext that we can use directly
// means not need to import useContext hook in every file to use Context.
export default function useTheme() {
  return useContext(ThemeContext);
}
