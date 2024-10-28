import {redirect, useNavigate} from "react-router-dom"
import "./navbar.scss"

const NavBar = () =>{
    const redirect= useNavigate();
  return(
    <div className="navbar">
        <span onClick={()=>redirect("/")}>
        NavBar
        </span>       
    </div>
  );
};
export default NavBar;