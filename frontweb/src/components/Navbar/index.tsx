import "./style.css";
import "bootstrap/js/dist/collapse"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to={"/"} className="nav-logo-text">
          <h4>Catalog</h4>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#catalog-navbar"
          aria-controls="catalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="catalog-navbar">
          <ul className="navbar-nav offset-md-2 menu-main">
            <li>
              <Link to={"/"}>HOME</Link>
            </li>
            <li>
              <Link to={"/catalogo"}>CATÁLOGO</Link>
            </li>
            <li>
              <Link to={"admin"}>ADMIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
