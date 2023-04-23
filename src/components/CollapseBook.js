import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowUp } from "react-icons/io";

const CollapseBook = () => {
  const [collapseInterative, setCollapseInteractive] = useState(true);

  const interactiveCollpase = (e) => {
    if (collapseInterative) {
      setCollapseInteractive(false);
      e.currentTarget
        .closest("li")
        .querySelector(".text_bloc")
        .classList.add("hideText");
    } else {
      setCollapseInteractive(true);
      e.currentTarget
        .closest("li")
        .querySelector(".text_bloc")
        .classList.remove("hideText");
    }
  };
  return (
    <ul className="bloc_react">
      <li>
        <div className="divider"></div>
        <div className="mini_bloc">
          <h5>What is Bookmark?</h5>
          <div>
            <IoIosArrowDown
              className="arrow_bottom"
              onClick={(e) => interactiveCollpase(e)}
            />
          </div>
        </div>
        <p className="text_bloc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
          distinctio quibusdam, molestias consequatur voluptas vitae voluptates
          quos velit ex pariatur quia iusto ut. Omnis, et! Doloribus omnis atque
          ab quasi possimus. Velit iste suscipit quia consequuntur nesciunt,
          quam quae ratione dolore vitae est cumque eligendi non iure eius
          blanditiis ullam incidunt! Atque debitis, laboriosam saepe provident
          accusamus corrupti dolorem? Ea!
        </p>
        <div className="divider "></div>
      </li>
      <li>
        <div className="mini_bloc">
          <h5>How can I request a new browser?</h5>

          <div>
            <IoIosArrowDown
              className="arrow_bottom"
              onClick={(e) => interactiveCollpase(e)}
            />
          </div>
        </div>
        <p className="text_bloc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
          distinctio quibusdam, molestias consequatur voluptas vitae voluptates
          quos velit ex pariatur quia iusto ut. Omnis, et! Doloribus omnis atque
          ab quasi possimus. Velit iste suscipit quia consequuntur nesciunt,
          quam quae ratione dolore vitae est cumque eligendi non iure eius
          blanditiis ullam incidunt! Atque debitis, laboriosam saepe provident
          accusamus corrupti dolorem? Ea!
        </p>
        <div className="divider"></div>
      </li>
      <li>
        <div className="mini_bloc">
          <h5>Is there a mobile app?</h5>
          <div>
            <IoIosArrowDown
              className="arrow_bottom"
              onClick={(e) => interactiveCollpase(e)}
            />
          </div>
        </div>
        <p className="text_bloc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
          distinctio quibusdam, molestias consequatur voluptas vitae voluptates
          quos velit ex pariatur quia iusto ut. Omnis, et! Doloribus omnis atque
          ab quasi possimus. Velit iste suscipit quia consequuntur nesciunt,
          quam quae ratione dolore vitae est cumque eligendi non iure eius
          blanditiis ullam incidunt! Atque debitis, laboriosam saepe provident
          accusamus corrupti dolorem? Ea!
        </p>
        <div className="divider"></div>
      </li>
      <li>
        <div className="mini_bloc">
          <h5>What about other Chromium browsers?</h5>
          <div>
            <IoIosArrowDown
              className="arrow_bottom"
              onClick={(e) => interactiveCollpase(e)}
            />
          </div>
        </div>
        <p className="text_bloc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
          illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
          distinctio quibusdam, molestias consequatur voluptas vitae voluptates
          quos velit ex pariatur quia iusto ut. Omnis, et! Doloribus omnis atque
          ab quasi possimus. Velit iste suscipit quia consequuntur nesciunt,
          quam quae ratione dolore vitae est cumque eligendi non iure eius
          blanditiis ullam incidunt! Atque debitis, laboriosam saepe provident
          accusamus corrupti dolorem? Ea!
        </p>
        <div className="divider"></div>
      </li>
    </ul>
  );
};

export default CollapseBook;
