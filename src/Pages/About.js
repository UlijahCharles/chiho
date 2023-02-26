import React from "react";
import MainNavbar from "../Components/MainNavbar";
import Map from "../Components/Map";
import Footer from "../Components/Footer";
import aboutImage from "../assets/about.png";
import aboutLogo from "../assets/about_logo.png";
import heartMarker from "../assets/heart_marker.png";
import style from "./about.module.css";

const About = (props) => {
  return (
    <React.Fragment>
      <div className={style.aboutContainer}>
        <h1 className={style.aboutTitle}>About</h1>

        <img className={style.aboutImage} src={aboutImage} alt="" />

        <p>
          Mauris cursus augue in justo malesuada, nec molestie mi malesuada. Sed
          maximus, dui id ultrices aliquam, dui mi facilisis lacus, vel
          hendrerit urna sem vel diam. Nulla ullamcorper, purus eget hendrerit
          semper, mauris mi posuere neque, ac laoreet lorem turpis non purus.
          Integer pellentesque sagittis massa, eu facilisis eros vehicula vel.
          Cras pharetra porta porttitor. Sed semper ac diam ac malesuada. Ut
          egestas magna ac ligula laoreet, eget tristique risus rhoncus. Etiam
          odio eros, feugiat vel viverra quis, tincidunt quis augue.
          Pellentesque purus magna, ultricies eget viverra eget, viverra egestas
          ipsum. Aliquam eleifend, est eu tempus sagittis, est tortor
          ullamcorper sapien, ut feugiat nibh massa nec mi. Nam a nibh id lacus
          vehicula scelerisque eget eget massa. Sed mattis purus malesuada,
          mollis lorem in, viverra urna. Integer fringilla nulla nec est
          tincidunt pellentesque. Proin sit amet eleifend lorem, vel porta leo.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          massa ex. Quisque sit amet ex eget est iaculis interdum. Aenean
          commodo justo massa, nec dictum ipsum fermentum sit amet. Cras in
          nulla eget lectus placerat porttitor sed ut enim. Aliquam erat
          volutpat. Integer congue orci dui. Praesent non nulla ornare, pharetra
          massa et, varius tellus. Aliquam turpis odio, egestas quis ligula
          pulvinar, scelerisque elementum libero. Cras suscipit consequat dui,
          non varius est efficitur at. Aliquam vitae mattis sem. Cras pharetra
          fermentum velit, nec convallis risus auctor quis. Etiam vitae placerat
          sem. Nulla non malesuada orci. Donec imperdiet dui non sapien
          ultricies consequat. Proin ultricies sed nulla laoreet congue.
        </p>
        <img className={style.aboutLogo} src={aboutLogo} alt="" />
        <p>
          Praesent finibus nunc id congue porta. Etiam dictum tortor non iaculis
          volutpat. Etiam consequat quam vel ex elementum blandit feugiat quis
          sapien. Suspendisse eget lectus in ligula porttitor placerat quis vel
          neque. Maecenas vestibulum augue et imperdiet bibendum. Duis interdum
          lorem quis efficitur gravida. Mauris maximus sodales mauris at
          dapibus. Curabitur maximus, urna nec viverra consectetur, arcu tortor
          tristique nulla, quis hendrerit mauris arcu sed velit.
        </p>
      </div>
      <h1 className={style.contactTitle}>Contacts</h1>
      <div className={style.contactContainer}>
        <h1 className={style.title}>CHIHO</h1>
        <div className={style.contactText}>
          <p>
            <img src={heartMarker} alt="" />
            Russia, Moscow
          </p>
          <p>Krivokolenny pereulok, 12/10</p>
        </div>
        <div className={style.contactText}>
          <p>Mon-Fri 10:00-23:00</p>
          <p>Sat-Sun 11:00-23:00</p>
        </div>
        <p className={style.contactText}>
          <span className={style.contactNumber}> +7 (495) 209-85-29</span>
        </p>
        <Map />
        <hr></hr>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default About;
