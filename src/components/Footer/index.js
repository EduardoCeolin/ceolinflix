import React from "react";
import { FooterBase } from "./styles";

import ScrollAnimation from "react-animate-on-scroll";

function Footer() {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" delay={100}>
      <FooterBase>
        <a href="https://www.alura.com.br/">
          <img
            src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
            alt="Logo Alura"
          />
        </a>
        <p>
          Orgulhosamente criado durante a{" "}
          <a href="https://www.alura.com.br/">Imersão React da Alura</a>
        </p>
      </FooterBase>
    </ScrollAnimation>
  );
}

export default Footer;
