import React from "react";
import "./CharacterInfoBox.css";

function CharacterInfoBox({ name, physicalInfo }) {
  return (
    <div className="character-info-box">
      <h2>{name}</h2>
      <ul>
        <li>Description: {physicalInfo.description}</li>
      </ul>
    </div>
  );
}

export default CharacterInfoBox;
