import "./AutoClicker.css";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

import img1 from "../../assets/images/autoclicker/white-theme.jpg";
import img2 from "../../assets/images/autoclicker/white-theme-data.jpg";
import img3 from "../../assets/images/autoclicker/dark-theme.jpg";
import img4 from "../../assets/images/autoclicker/dark-theme-data.jpg";

function AutoClicker({ data: { name, description, label, usage, btnBack } }) {
  return (
    <>
      <div className="ac-container">
        <section className="ac-title">
          <div className="ac-back">
            <h3>
              <Link to="..">{btnBack}</Link>
            </h3>
          </div>
          <h2>{name}</h2>
          <h4 className="ac-description">{description}</h4>
        </section>
        <section className="ac-responsive-iframe">
          <iframe
            src="https://www.youtube.com/embed/RJJUxyYnuS4"
            title="Safe Auto Clicker"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </section>
        <section className="ac-images-wrapper">
          <img
            src={img1}
            alt="white theme"
          />
          <img
            src={img2}
            alt="white theme with time"
          />
          <img
            src={img3}
            alt="dark theme"
          />
          <img
            src={img4}
            alt="dark theme with time"
          />
        </section>
        <section className="ac-usage">
          <h2>{label}</h2>
          <ol>
            {usage.map((elem, index) => {
              return <li key={index}>{elem}</li>;
            })}
          </ol>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default AutoClicker;
