import React, { useContext } from "react"
import {GlobalContext} from "../context"
import "../App.css";

const Navbar = () => {

    const{state, dispatch}= useContext(GlobalContext);

  return (
    <div className={state.class}>
        <p>Home</p>
        <button onClick={() => dispatch({ type: 'THEME' })}
        
        className={state.class}
        >
            Cambiar Tema
        </button>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}

export default Navbar