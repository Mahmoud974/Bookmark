import React, { useState } from "react";
import { browser_data } from "../images/browser_data";
import CardBrowser from "../components/CardBrowser";
import Contact from "./Contact";
import CollapseBook from "../components/CollapseBook";

const Features = () => {
  const [data] = useState({ browser_data });
  const [valueText, setValueText] = useState("");
  const [textFeatures, setTextFeatures] = useState("Bookmark in one click");
  const [imgFeatures, setImgFeatures] = useState(
    "../images/illustration-features-tab-1.svg"
  );
  /**
   * Choose the mini menu
   * @param {*} e
   */
  const changeMenu = (e) => {
    setValueText(e.target.textContent);

    switch (valueText) {
      case "Simple Bookmarking":
        setImgFeatures("../images/illustration-features-tab-1.svg");
        setTextFeatures("Bookmark in one click");
        break;
      case "Speedy Searching":
        setImgFeatures("../images/illustration-features-tab-2.svg");
        setTextFeatures("Intelligent search");
        break;
      case "Easy Sharing":
        setImgFeatures("../images/illustration-features-tab-3.svg");
        setTextFeatures("Share your bookmarks");
        break;
      default:
    }
  };

  return (
    <>
      <div className="bloc_features">
        <div className="block_frequently">
          <h2>Features</h2>
          <p className="text_features">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
        <div className="features_routes">
          <div className="divider"></div>
          <h3 onClick={(e) => changeMenu(e)}>Simple Bookmarking</h3>
          <div className="divider"></div>
          <h3 onClick={(e) => changeMenu(e)}>Speedy Searching</h3>
          <div className="divider"></div>
          <h3 onClick={(e) => changeMenu(e)}>Easy Sharing</h3>
          <div className="divider"></div>
        </div>
        <div className="divider_destkop"></div>
        <div className="tablet_and_text">
          <div className="display_tablet">
            <img src={imgFeatures} alt="" className="img_tablet" />
            <div className="blue_cube_round"></div>
          </div>
          <div className="block_book_text">
            {" "}
            <h4>{textFeatures}</h4>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>{" "}
            <button>More Info</button>
          </div>
        </div>
        <div className="bookmark_click">
          <div className="extensions_and_text">
            <h4>Download the extension</h4>
            <p>
              We've got more browsers in the pipeline. Please do let us know if
              you've got a favourite you'd like us to prioritize.
            </p>
          </div>
          <div className="my_cards">
            {data.browser_data.map((card, index) => (
              <CardBrowser card={card} key={index} />
            ))}
          </div>

          <div className="title_frequently">
            <h4>Frequently Asked Questions</h4>
            <p>
              Here are some of our FAQs. If you have any other quetions you'd
              like answered please feel free to email us.
            </p>
          </div>
          <CollapseBook />
        </div>
        <button className="more_info_2">More Info</button>
      </div>
      <Contact />
    </>
  );
};

export default Features;
