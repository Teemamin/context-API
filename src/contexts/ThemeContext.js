import React,{createContext} from "react";
import useToggle from "../hooks/UseToggleState";

export const ThemeContext = createContext();

function ThemeProvider(props){
    const[isDarkMode,toggleTheme] = useToggle(false)

        return(
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
        )
}

export default ThemeProvider