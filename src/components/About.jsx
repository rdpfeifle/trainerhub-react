import trainer from "../assets/trainer.webp";
import "./About.css";

export default function About() {
  return (
    <section className="About">
      <div>
        <h2>Alexander Arnold</h2>
        <h4>35 y.o. // 10 years experience</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span>Viverra amet placerat mauris elementum dignissim.</span>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span>Viverra amet placerat mauris elementum dignissim.</span>
        </p>
        <button className="about-btn">Sign up for training</button>
      </div>
      <div>
        <img src={trainer} alt="trainer" />
      </div>
    </section>
  );
}
