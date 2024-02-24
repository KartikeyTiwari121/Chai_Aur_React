import { createContext, useContext } from "react";

export const ThemeContext = createContext(
    {
        themeMode: "light",
        darkTheme : () => {},
        lightTheme : () => {},
    }
)

//below this line is used to wrap the child components inside for property access dirctly.
export const ThemeProvider = ThemeContext.Provider


//below this line is used to access the property of useTheme() function using it's name whenever we want, but firstly we've to wrap the components using themeProvider, then we're able to access the property of themeContext using function usetheme()
export default function useTheme(){
    return useContext(ThemeContext)
}



