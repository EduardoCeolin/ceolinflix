import React from "react";

import "./menu.css";
import Logo from "../../assets/ceolinflix.png";
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Button as="a" href="/">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
