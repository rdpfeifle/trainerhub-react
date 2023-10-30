import "./Hero.css";
import workoutVector1 from "../assets/workout-vector-1.webp";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <h1>
          The time to get <span>strong</span>&nbsp;has come
        </h1>
        <p className="hero-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <span>Viverra amet placerat mauris elementum dignissim.</span>
        </p>
        <button>Contact Us</button>
      </div>
      <div>
        <img
          alt="man working out"
          className="workoutVector1"
          src={workoutVector1}
        />
      </div>
    </section>
  );
}
