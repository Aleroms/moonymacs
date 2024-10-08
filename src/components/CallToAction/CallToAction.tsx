import React from "react";
import "./CallToAction.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const CallToAction: React.FC = () => {
  const navigation = useNavigate();
  const navigateToContactPage = () => {
    navigation("/contact");
  };
  return (
    <section className="call-to-action">
      <div className="cta-item">
        <h2>Get In Touch</h2>
        <h3>and buy some macrons :)</h3>
        <p>
          Enjoy our handmade macarons, crafted with love in the heart of Apple
          Valley. Place an order and experience the delightful crunch and creamy
          center of out beloved treats.
        </p>
        <p>
          Order now for a quick and easy pick-up or meet-up, your perfect
          macaron moment is just a DM away!
        </p>
        {/* insert social media container here  */}
        <Button label="contact me" onClick={navigateToContactPage} />
      </div>
      <div className="cta-item">
        <img src="/logo/logoSvg.svg" alt="moonymacs" width={275} />
      </div>
    </section>
  );
};
export default CallToAction;
