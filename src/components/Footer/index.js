import React from "react";
import { Link } from "react-router-dom";
import { FooterBase } from "./styles";

import Logo from "../../assets/ceolinflix.png";

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img src={Logo} alt="Logo Ceolinflix" />
      </Link>
      <p>
        Orgulhosamente criado durante a{" "}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>
    </FooterBase>
  );
}

export default Footer;
