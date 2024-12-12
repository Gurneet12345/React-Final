import React from "react";
import "./CharacterCard.css";

function CharacterCard({ title, description }) {
  return (
    <div className="character-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CharacterCard;
