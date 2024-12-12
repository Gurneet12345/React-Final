import React from "react";
import "./CharacterCard.css";

function CharacterCard({ title, description, image }) {
  return (
    <div className="character-card">
      <img src={image} alt={title} className="character-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CharacterCard;
