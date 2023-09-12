import { createContext, useReducer } from "react";

const globalReducer = (state,action) =>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count+1, class: state.class}
        case "DECREMENT":
            return {count: state.count-1, class: state.class}
        case "THEME":
            if (state.class === "dark"){return {count: state.count, class: "light"}}
            else {return {count: state.count, class : "dark"}}
        default:
            return state
    }
}
export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
    const initialState = {
        class: "light",
        count: 0
    }
    const [state,dispatch]= useReducer(globalReducer,initialState);

    return (
        <GlobalContext.Provider value={{state,dispatch}}>
            {children}
        </GlobalContext.Provider>
    );

};
export default GlobalProvider;











// export const themes={
//     light:{
//         class: "light"
//     },
//     dark:{
    
//         class: "dark"
//     }
// };

// const ThemeContext= createContext(themes.light);

// export default ThemeContext;