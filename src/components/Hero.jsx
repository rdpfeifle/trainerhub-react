import "./Hero.css";
import workoutVector1 from "../assets/workout-vector-1.webp";

export default function Hero() {
  return (
    <section className="Hero">
      <div>
        <h1>
          The time to get <span>strong</span> has come
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet
          placerat mauris elementum dignissim.
        </p>
        <button>Contact Us</button>
      </div>
      <div>
        <img alt="man working out" src={workoutVector1} />
      </div>
    </section>
  );
}
