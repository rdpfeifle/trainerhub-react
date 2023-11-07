import "./Footer.css";

import {
  AiOutlineInstagram,
  AiOutlineDribbble,
  AiOutlineTwitter,
  AiFillYoutube,
} from "react-icons/ai";

import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer>
      <hr />
      <h2>
        Trainer<span>Hub</span>
      </h2>
      <div>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Our trainings</li>
          <li>Price</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <h3>Stay up to date</h3>
        <form className="email-container">
          <input
            type="email"
            placeholder="Your email address"
            className="email-input"
          />
          <FiSend className="send-icon" />
        </form>
        <div>
          <AiOutlineInstagram className="social-links" />
          <AiOutlineDribbble className="social-links" />
          <AiOutlineTwitter className="social-links" />
          <AiFillYoutube className="social-links" />
        </div>
      </div>
      <p>© Copyright © 2023 TrainerHub.</p>
    </footer>
  );
}
