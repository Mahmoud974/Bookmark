import React from "react";

const CardBrowser = ({ card }) => {
  return (
    <div className="card">
      <img src={card.img} alt={card.alt} />
      <h5>{card.title}</h5>
      <p>{card.version}</p>
      <img src="../images/bg-dots.svg" alt="bg dots" className="bg_dots" />
      <button>Add & install Extension</button>
    </div>
  );
};

export default CardBrowser;
