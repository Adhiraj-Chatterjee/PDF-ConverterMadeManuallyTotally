import logo from "../../assets/icons/PDFLogo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <img src={logo} alt="PDF Converter Logo" className="logo" />
        <span className="brand-text">PDF Converter</span>
      </div>
    </nav>
  );
}

export default Navbar;
