import "./Details.css";
import workoutVector2 from "../assets/workout-vector-2.webp";

export default function Details() {
  return (
    <section className="Details">
      <div className="img-container">
        <img
          src={workoutVector2}
          className="workoutVector2"
          alt="woman working out"
        />
      </div>
      <div className="details-content">
        <h2>
          Choose loads <span className="title-span">for yourself</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet
          placerat mauris elementum dignissim.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra amet
          placerat mauris elementum dignissim.
        </p>
      </div>
    </section>
  );
}
