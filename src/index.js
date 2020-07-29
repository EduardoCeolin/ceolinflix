import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./pages/Home";
import CadastroVideo from "./pages/Cadastro/Video";
import CadastroCategoria from "./pages/Cadastro/Categoria";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const error404 = () => {
  return <div>Page not found, error 404</div>;
};

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route path="" component={error404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
