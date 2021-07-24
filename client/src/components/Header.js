import React from "react";
import { useCookies } from "react-cookie";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies();
  return (
    <div>
      <nav className="p-2 navbar navbar-dark bg-info">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Covid-19 Report
          </a>
          <div className="d-flex dropstart">
            <FaUserCircle
              data-bs-toggle="collapse"
              href="#userDetails"
              role="button"
              aria-expanded="false"
              aria-controls="userDetails"
              style={{
                fontSize: "28",
                color: "#fff",
              }}
            />
          </div>
        </div>
      </nav>

      <div className="collapse" id="userDetails">
        <div className=" p-3 border-bottom d-flex justify-content-between align-items-center">
          <div>
            Status: <span className="text-primary">Inactive</span>
          </div>
          <button
            onClick={() => removeCookie("LoginAuth")}
            type="button"
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
