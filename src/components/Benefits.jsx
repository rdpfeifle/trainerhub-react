import "./Benefits.css";
import workoutVector3 from "../assets/workout-vector-3.webp";

export default function Benefits() {
  return (
    <section className="Benefits">
      <img src={workoutVector3} alt="lady working out" />
      <h2>
        <span>The benefits</span> of exercise
      </h2>
      <div className="cards-container">
        <div className="card">
          <h3>Increases business flexibility</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            amet placerat mauris elementum dignissim.
          </p>
        </div>
        <div className="card">
          <h3>Improves mental health</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            amet placerat mauris elementum dignissim.
          </p>
        </div>
        <div className="card">
          <h3>Provides more energy throughout the day</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            amet placerat mauris elementum dignissim.
          </p>
        </div>
        <div className="card">
          <h3>Helps to find new friends</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            amet placerat mauris elementum dignissim.
          </p>
        </div>
      </div>
      <button className="benefits-btn">Get now</button>
    </section>
  );
}
