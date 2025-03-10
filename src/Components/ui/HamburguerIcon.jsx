import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "../icons/Menu";



export const HamburguerIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log('true');
  };

  return (
    <div className="mobile-menu" onClick={toggleMenu}>
      <Menu />
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        
          <NavLink className="navbar__link--mobile" to="/Antonio-Lauro-Web/">
            Inicio
          </NavLink>
          <NavLink className="navbar__link--mobile" to="/About">
            Nosotros
          </NavLink>
          <NavLink className="navbar__link--mobile" to="/News">
            Noticias
          </NavLink>
          
        
      </nav>
    </div>
  );
};
