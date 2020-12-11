import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  //Tenemos que englobar el componente App con el componente Router de react-router-dom
  document.getElementById("root")
);
