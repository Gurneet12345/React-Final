import React from "react";
import CharacterCard from "../components/CharacterCard";
import "./HomePage.css";

function HomePage() {
  const allCharacters = [
    {
      title: "Character 1",
      description: "Character Name 1",
      image: "https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png",
    },
    {
      title: "Character 2",
      description: "Character Name 2",
      image: "https://upload.wikimedia.org/wikipedia/en/b/be/Luigi_by_Shigehisa_Nakaue.png",
    },
    {
      title: "Character 3",
      description: "Character Name 3",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Princess_Peach_Stock_Art.png/170px-Princess_Peach_Stock_Art.png",
    },
    {
      title: "Character 4",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },
    {
      title: "Character 5",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },
    {
      title: "Character 6",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },

    {
      title: "Character 7",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },

    {
      title: "Character 8",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },
    {
      title: "Character 9",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },

    {
      title: "Character 10",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },

    {
      title: "Character 11",
      description: "Character Name 3",
      image: "https://source.unsplash.com/random/300x300?character3",
    },
  ];

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
          <CharacterCard
            title="Featured Character"
            description="Hero Name"
            image="https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png"
          />
          <CharacterCard
            title="Featured Character"
            description="Villain Name"
            image="https://source.unsplash.com/random/300x300?villain"
          />
        </div>
      </section>
      <section className="all-characters">
        <h2>All Characters</h2>
        <div className="character-grid">
          {allCharacters.map((char, index) => (
            <CharacterCard
              key={index}
              title={char.title}
              description={char.description}
              image={char.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
