import React from "react";
import styled from "styled-components";
import PageDefault from "../../components/PageDefault";

const Iframe = styled.iframe`
  width: 100%;
  height: 450px;
`;

function Page404() {
  return (
    <PageDefault>
      <h1>Page not found !</h1>
      <Iframe
        scrolling="no"
        frameborder="0"
        title="flappybird"
        src="https://mariosouto.com/flappy-bird-devsoutinho/"
      />
    </PageDefault>
  );
}

export default Page404;
