import React from "react";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="my-name">
        <h1>Iván Dominguez</h1>
      </div>
      <ul>
        <li><a href="a">Acerca de mí</a></li>
        <li><a href="a">Proyectos</a></li>
        <li><a href="a">Tecnologías</a></li>
        <li><a href="a">Contacto</a></li>
      </ul>
    </div>
  );
}
