import {GlobalContext} from "../context";
import { useContext } from "react";

const Layout = ({children}) => {

  const{state}= useContext(GlobalContext);

  return (
    <div className={state.class}>
        {children}
    </div>
  )
}

export default Layout
//style={{background:theme.background, color: theme.font}}