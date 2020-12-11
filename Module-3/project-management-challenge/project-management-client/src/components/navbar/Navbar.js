import React from 'react';
import { Link } from "react-router-dom";

// importamos React y 'Link' del paquete react-router-dom

// declaramos un componente funcional 'navbar' que devuelva, por el momento, una navbar con un único 'Link' dirigido a nuestra ruta '/projects'
const navbar = () => {
    return (
    
    <nav className="nav-style">
      <ul>
        <li style={{ listStyle: "none" }}>
          <Link to="/projects" style={{ textDecoration: "none" }}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
    )
  };
  
  export default navbar;