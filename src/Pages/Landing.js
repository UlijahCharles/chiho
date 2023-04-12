import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import LaunchNavbar from "../Components/LaunchNavbar";
import EnterButton from "../UI/EnterButton";

const Landing = () => {
  const navigate = useNavigate();

  const Enter = (event) => {
    event.preventDefault();
    //Route to the main page using Routes
    navigate("/home");
  };
  return (
    <React.Fragment>
      <LaunchNavbar />
      <div className={styles.background}>
        <p className={styles.slogan}>
          CHIHO <br /> IS TRUE CHINA
        </p>

        <EnterButton title="Enter" onEnter={Enter} />
      </div>
    </React.Fragment>
  );
};

export default Landing;
