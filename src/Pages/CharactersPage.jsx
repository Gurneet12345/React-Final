import React from "react";
import { Link } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import "./CharactersPage.css";

function CharactersPage() {
  const characters = [
    { title: "Character 1", description: "Description of Character 1" },
    { title: "Character 2", description: "Description of Character 2" },
    { title: "Character 3", description: "Description of Character 3" },
  ];

  return (
    <div className="characters-page">
      <h1>Characters</h1>
      <div className="characters-grid">
        {characters.map((char, index) => (
          <CharacterCard
            key={index}
            title={char.title}
            description={char.description}
          />
        ))}
      </div>
      <div className="back-button">
        <Link to="/">
          <button>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default CharactersPage;
