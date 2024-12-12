import React from "react";
import CharacterCard from "../components/CharacterCard";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Game Characters Wiki</h1>
        <nav className="header-nav">
          <a href="#series1">Game Series 1</a>
          <a href="#series2">Game Series 2</a>
          <a href="#series3">Game Series 3</a>
        </nav>
      </header>
      <section className="featured-characters">
        <h2>Featured Characters</h2>
        <div className="character-row">
          <CharacterCard title="Featured Character" description="Hero Name" />
          <CharacterCard title="Featured Character" description="Villain Name" />
        </div>
      </section>
      <section className="all-characters">
        <h2>All Characters</h2>
        <div className="character-grid">
          <CharacterCard title="Character 1" description="Character Name 1" />
          <CharacterCard title="Character 2" description="Character Name 2" />
          <CharacterCard title="Character 3" description="Character Name 3" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
