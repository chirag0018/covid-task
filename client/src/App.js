import React from "react";
import { useCookies } from "react-cookie";

import Login from "./screens/Login";
import Home from "./screens/Home";

function App() {
  const [cookies, setCookie] = useCookies();

  return <div>{cookies.LoginAuth === undefined ? <Login /> : <Home />}</div>;
}

export default App;
