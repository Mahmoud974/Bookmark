import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CollapseBook = () => {
  const [collapseState, setCollapseState] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  });

  const toggleCollapse = (item) => {
    setCollapseState((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <ul className="bloc_react">
      <li>
        <div className="divider"></div>
        <div className="mini_bloc">
          <h5>What is Bookmark?</h5>
          <div>
            {collapseState.item1 ? (
              <IoIosArrowDown
                className="arrow_bottom"
                onClick={() => toggleCollapse("item1")}
              />
            ) : (
              <IoIosArrowUp
                className="arrow_bottom"
                onClick={() => toggleCollapse("item1")}
              />
            )}
          </div>
        </div>
        {collapseState.item1 && (
          <p className="text_bloc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
            illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
            distinctio quibusdam, molestias consequatur voluptas vitae
            voluptates quos velit ex pariatur quia iusto ut. Omnis, et!
            Doloribus omnis atque ab quasi possimus. Velit iste suscipit quia
            consequuntur nesciunt, quam quae ratione dolore vitae est cumque
            eligendi non iure eius blanditiis ullam incidunt! Atque debitis,
            laboriosam saepe provident accusamus corrupti dolorem? Ea!
          </p>
        )}
      </li>
      <li>
        <div className="divider"></div>
        <div className="mini_bloc">
          <h5>How can I request a new browser?</h5>
          <div>
            {collapseState.item2 ? (
              <IoIosArrowDown
                className="arrow_bottom"
                onClick={() => toggleCollapse("item2")}
              />
            ) : (
              <IoIosArrowUp
                className="arrow_bottom"
                onClick={() => toggleCollapse("item2")}
              />
            )}
          </div>
        </div>
        {collapseState.item2 && (
          <p className="text_bloc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
            illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
            distinctio quibusdam, molestias consequatur voluptas vitae
            voluptates quos velit ex pariatur quia iusto ut. Omnis, et!
            Doloribus omnis atque ab quasi possimus. Velit iste suscipit quia
            consequuntur nesciunt, quam quae ratione dolore vitae est cumque
            eligendi non iure eius blanditiis ullam incidunt! Atque debitis,
            laboriosam saepe provident accusamus corrupti dolorem? Ea!
          </p>
        )}
        <div className="divider"></div>
      </li>
      <li>
        <div className="mini_bloc">
          <h5>Is there a mobile app?</h5>
          <div>
            {collapseState.item3 ? (
              <IoIosArrowDown
                className="arrow_bottom"
                onClick={() => toggleCollapse("item3")}
              />
            ) : (
              <IoIosArrowUp
                className="arrow_bottom"
                onClick={() => toggleCollapse("item3")}
              />
            )}
          </div>
        </div>
        {collapseState.item3 && (
          <p className="text_bloc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
            illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
            distinctio quibusdam, molestias consequatur voluptas vitae
            voluptates quos velit ex pariatur quia iusto ut. Omnis, et!
            Doloribus omnis atque ab quasi possimus. Velit iste suscipit quia
            consequuntur nesciunt, quam quae ratione dolore vitae est cumque
            eligendi non iure eius blanditiis ullam incidunt! Atque debitis,
            laboriosam saepe provident accusamus corrupti dolorem? Ea!
          </p>
        )}
      </li>
      <li>
        <div className="divider"></div>
        <div className="mini_bloc">
          <h5>What about other Chromium browsers?</h5>
          <div>
            {collapseState.item4 ? (
              <IoIosArrowDown
                className="arrow_bottom"
                onClick={() => toggleCollapse("item4")}
              />
            ) : (
              <IoIosArrowUp
                className="arrow_bottom"
                onClick={() => toggleCollapse("item4")}
              />
            )}
          </div>
        </div>
        {collapseState.item4 && (
          <p className="text_bloc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt odit
            illo voluptatibus animi, maiores, dolor nemo nisi tenetur sint
            distinctio quibusdam, molestias consequatur voluptas vitae
            voluptates quos velit ex pariatur quia iusto ut. Omnis, et!
            Doloribus omnis atque ab quasi possimus. Velit iste suscipit quia
            consequuntur nesciunt, quam quae ratione dolore vitae est cumque
            eligendi non iure eius blanditiis ullam incidunt! Atque debitis,
            laboriosam saepe provident accusamus corrupti dolorem? Ea!
          </p>
        )}
        <div className="divider"></div>
      </li>
    </ul>
  );
};

export default CollapseBook;
