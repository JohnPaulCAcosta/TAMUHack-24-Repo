import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";

const Navbar = ({ routes }) => {
  const [, setActivePage] = useState("Home");

  const location = useLocation();

  return (
    <header className="p-3 text-bg">
      <div className="container-fluid">
        <div
          className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
          style={{ overflow: "auto" }}
        >
          <Link
            to={"/"}
            className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
          >
            <h1>TAMUHACK2024</h1>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {routes.map((item, i) => {
              const key = `nav-item-${item.name}-${i}`;
              return (
                <li key={key}>
                  <Link
                    className="nav-link text-dark"
                    to={item.path}
                    style={
                      location.pathname === item.path
                        ? {
                            textDecoration: "underline",
                            textDecorationColor: "#cf152d",
                            textDecorationThickness: "4px",
                            textUnderlineOffset: "10px",
                          }
                        : {}
                    }
                    onClick={() => setActivePage(item.name)}
                  >
                    <p className="navbar-link m-0">{item.name}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
