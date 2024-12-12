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
      title: "Princess Peach",
      description: "Head of State",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Princess_Peach_Stock_Art.png/170px-Princess_Peach_Stock_Art.png",
    },
    {
      title: "Kamek",
      description: "maternal figure",
      image: "https://e7.pngegg.com/pngimages/418/95/png-clipart-mario-kart-7-bowser-kamek-mario-bros-mario-kart-heroes-nintendo.png",
    },
    {
      title: "Rosalina",
      description: "Non-Player Character",
      image: "https://static.wikia.nocookie.net/mario/images/5/56/Rosalina-MPTop100-Transparent.png",
    },
    {
      title: "Baby Rosalina",
      description: "Detective",
      image: "https://static.wikia.nocookie.net/mk-tour/images/3/33/MKT_Artwork_BabyRosalina.png",
    },

    {
      title: "Birdo",
      description: "Boss character",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbQD8RBKOA_-OiGZ85nXmci2tKEHYXZ5V9qjmcKs6DoLZh1HhM74ap5iwUS0bluYzeRc&usqp=CAU",
    },

    {
      title: "Wario",
      description: "boss character",
      image: "https://upload.wikimedia.org/wikipedia/en/8/81/Wario.png",
    },
    {
      title: "Browser",
      description: "fictional character",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bowser_by_Shigehisa_Nakaue.png",
    },

    {
      title: "Toad",
      description: "Princess Peach's Handler ",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Toad_by_Shigehisa_Nakaue.png",
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
            image="https://upload.wikimedia.org/wikipedia/en/d/d1/Bowser_by_Shigehisa_Nakaue.png"
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
