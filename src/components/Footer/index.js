import React from "react";
import { FooterBase } from "./styles";

import Logo from "../../assets/ceolinflix.png";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={100}>
      <FooterBase>
        <Link to="/">
          <img src={Logo} alt="Logo Ceolinflix" />
        </Link>
        <p>
          Orgulhosamente criado durante a{" "}
          <a href="https://www.alura.com.br/">Imersão React da Alura</a>
        </p>
      </FooterBase>
    </ScrollAnimation>
  );
}

export default Footer;
