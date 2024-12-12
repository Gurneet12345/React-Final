import React from "react";
import { Link } from "react-router-dom";
import "./CharactersPage.css";

function CharactersPage() {
  // Character data with names and image URLs
  const charactersData = [
    { name: "Mario", image: "https://upload.wikimedia.org/wikipedia/en/b/be/Luigi_by_Shigehisa_Nakaue.png" },
    { name: "Princess Peach", image: "https://example.com/princess_peach.png" },
    { name: "Kamek", image: "https://example.com/kamek.png" },
    { name: "Birdo", image: "https://example.com/birdo.png" },
    { name: "Nabbit", image: "https://example.com/nabbit.png" },
    { name: "Toadette", image: "https://example.com/toadette.png" },
    { name: "Fawful", image: "https://example.com/fawful.png" },
    { name: "Toadsworth", image: "https://example.com/toadsworth.png" },
    { name: "Monty Mole", image: "https://example.com/monty_mole.png" },
    { name: "Donkey Kong", image: "https://example.com/donkey_kong.png" },
    { name: "Ludwig von Koopa", image: "https://example.com/ludwig.png" },
    { name: "Major Burrows", image: "https://example.com/major_burrows.png" },
    { name: "Midbus", image: "https://example.com/midbus.png" },
    { name: "Muscular", image: "https://example.com/muscular.png" },
    { name: "Bow", image: "https://example.com/bow.png" },
    { name: "Diddy Kong", image: "https://example.com/diddy_kong.png" },
    { name: "Baby Luigi", image: "https://example.com/baby_luigi.png" },
    { name: "Luigi", image: "https://example.com/luigi.png" },
    { name: "Rosalina", image: "https://example.com/rosalina.png" },
    { name: "Baby Rosalina", image: "https://example.com/baby_rosalina.png" },
    { name: "Wario", image: "https://example.com/wario.png" },
    { name: "Yoshi", image: "https://example.com/yoshi.png" },
    { name: "King Boo", image: "https://example.com/king_boo.png" },
    { name: "Lakitu", image: "https://example.com/lakitu.png" },
    { name: "Honey Queen", image: "https://example.com/honey_queen.png" },
    { name: "Metal Mario", image: "https://example.com/metal_mario.png" },
    { name: "Mallow", image: "https://example.com/mallow.png" },
    { name: "Pauline", image: "https://example.com/pauline.png" },
    { name: "Misstar", image: "https://example.com/misstar.png" },
    { name: "Merlon", image: "https://example.com/merlon.png" },
    { name: "Boshi", image: "https://example.com/boshi.png" },
    { name: "Hammer Bro.", image: "https://example.com/hammer_bro.png" },
    { name: "Baby Peach", image: "https://example.com/baby_peach.png" },
    { name: "Koopa Kid", image: "https://example.com/koopa_kid.png" },
    { name: "Bowser", image: "https://example.com/bowser.png" },
    { name: "Princess Daisy", image: "https://example.com/princess_daisy.png" },
    { name: "Toad", image: "https://example.com/toad.png" },
    { name: "Waluigi", image: "https://example.com/waluigi.png" },
    { name: "Bowser Jr.", image: "https://example.com/bowser_jr.png" },
    { name: "Iggy Koopa", image: "https://example.com/iggy_koopa.png" },
    { name: "Lemmy Koopa", image: "https://example.com/lemmy_koopa.png" },
    { name: "E. Gadd", image: "https://example.com/e_gadd.png" },
    { name: "King Bob-omb", image: "https://example.com/king_bobomb.png" },
    { name: "Poochy", image: "https://example.com/poochy.png" },
    { name: "Petey Piranha", image: "https://example.com/petey_piranha.png" },
    { name: "Parakarry", image: "https://example.com/parakarry.png" },
    { name: "Merlumina", image: "https://example.com/merlumina.png" },
    { name: "Piantas", image: "https://example.com/piantas.png" },
    { name: "Captain Toad", image: "https://example.com/captain_toad.png" },
    { name: "Baby Daisy", image: "https://example.com/baby_daisy.png" },
    { name: "Ninji", image: "https://example.com/ninji.png" }
  ];

  return (
    <div className="characters-page">
      
      <main className="main-content">
        <h1 className="page-title">All Characters</h1>
        <div className="character-list">
          {charactersData.map((character, index) => (
            <div key={index} className="character-item">
              <img
                src={character.image}
                alt={character.name}
                className="character-img"
              />
              <p className="character-name">{character.name}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default CharactersPage;
