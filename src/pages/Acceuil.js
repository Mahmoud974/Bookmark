import React from "react";
import Navbar from "../components/Navbar";
import Tablet from "../images/illustration-hero.svg";
const Acceuil = () => {
  return (
    <>
      <Navbar />
      <div className="bloc_home">
        <div className="display_tablet">
          <img src={Tablet} alt="" className="img_tablet" />
          <div className="blue_cube_round"></div>
        </div>
        <div className="simple_bookmark">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="buttons">
            <button className="btn_Chrome">Get it on Chrome</button>
            <button className="btn_Firefox">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acceuil;
