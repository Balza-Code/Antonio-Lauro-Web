import React from "react";
import { NavLink } from "react-router-dom";
import lauro from '../imgs/Lauro.png';
import { HamburguerIcon } from "./HamburguerIcon";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar__logo">
          <a className="navbar__title">
            <img src={lauro} className="navbar__img"/>
            <span className="navbar__name">E.B.N. Antonio Lauro</span>
          </a>
          {/* <button>
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button> */}
        </div>
        <div className="navbar__links">
          <NavLink className='navbar__link' to="/Antonio-Lauro-Web/">Inicio</NavLink>
          <NavLink className='navbar__link' to="/About">Nosotros</NavLink>
          <NavLink className='navbar__link' to="/News">Noticias</NavLink>
          {/* <NavLink className='navbar__link' to="/Contact">Contacto</NavLink> */}
        </div>
        <HamburguerIcon/>
      </nav>
    </div>
  );
};
