import "./Header.css";

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
        </ul>
      </div>
    </nav>
  );
}
