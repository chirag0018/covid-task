import React, { useState } from "react";
import { useCookies } from "react-cookie";

import { RoutesFetch } from "../config/Routes";

function Login() {
  const [cookies, setCookie] = useCookies(["LoginAuth"]);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = (e) => {
    e.preventDefault();

    RoutesFetch("/verifyuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        password,
      }),
    })
      .then((response) => {
        if (response.msg === "fail") {
          setError("authIncorrect");
        } else {
          setError("");
          setCookie("LoginAuth", response.token, {
            path: "/",
          });
        }
      })
      .catch(() => setError("loginFail"));
  };

  return (
    <div>
      {error === "authIncorrect" ? (
        <div className="alert alert-danger" role="alert">
          Incorrect username or password !
        </div>
      ) : error === "loginFail" ? (
        <div className="alert alert-warning" role="alert">
          Something went wrong! Please retry.
        </div>
      ) : null}

      <div className="m-3 mt-5 d-flex justify-content-center">
        <div className="w-100 shadow p-3 mb-5 bg-body rounded">
          <p className="text-info fs-4">Login</p>

          <form onSubmit={login}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                aria-describedby="emailHelp"
                value={userName}
                onChange={(text) => setUserName(text.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-info text-light">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="p-4 fixed-bottom text-center fs-3 text-white bg-info">
        Covid-19 Report
      </div>
    </div>
  );
}

export default Login;
