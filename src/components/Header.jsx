import "./Header.css";
import { BsSearch } from "react-icons/bs";

export default function Header() {
  return (
    <nav>
      <div className="logo-container">
        <h2>
          Trainer<span className="header-span">Hub</span>
        </h2>
      </div>
      <div className="nav-links-container">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <BsSearch className="nav-icon" />
        </ul>
      </div>
    </nav>
  );
}
