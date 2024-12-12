import React from "react";
import CharacterCard from "../components/CharacterCard";
import "./HomePage.css";

function HomePage() {
  const allCharacters = [
    {
      title: "Mario",
      description: "Recurring Character",
      image: "https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png",
    },
    {
      title: "Luigi",
      description: "The Protagonist",
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
    {
      title: "Princess Daisy",
      description: "Ruler of Sarasaland",
      image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Princess_Daisy_by_Shigehisa_Nakaue.png",
    },
    {
      title: "Waluigi",
      description: "Mischief ",
      image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Waluigi_by_Shigehisa_Nakaue.png",
    },
    {
      title: "Nabbit",
      description: "Fleeing from the road house",
      image: "https://static.wikia.nocookie.net/mario/images/f/f7/SMBW_Nabbit.webp",
    },
    {
      title: "Yoshi",
      description: "fictional dinosaur",
      image: "https://upload.wikimedia.org/wikipedia/pt/4/48/Yoshi.png",
    },
    {
      title: "Browser Jr.",
      description: "Child Son of Browser",
      image: "https://static.wikia.nocookie.net/mario/images/5/5d/Bowser_Jr_SMB_Wonder_artwork.png",
    },
    {
      title: "Toadette",
      description: "Member of the toad species",
      image: "https://i.pinimg.com/236x/dc/9d/22/dc9d227d421cae78d533b16bff95ef04.jpg",
    },
    {
      title: "King Boo",
      description: "Memorable Character",
      image: "https://static.wikia.nocookie.net/mk-tour/images/a/a9/King_Boo_Artwork_MSS.png",
    },
    {
      title: "Iggy Koopa",
      description: "Just a luggy",
      image: "https://static.wikia.nocookie.net/ilvg/images/3/33/Iggy.jpg",
    },
    {
      title: "Fawful",
      description: " Antagonist ",
      image: "https://static.wikia.nocookie.net/hello-yoshi/images/e/eb/1168px-Fawful_artwork_MLBiS.png",
    },
    {
      title: "Lakitu",
      description: "Minor Character ",
      image: "https://i.pinimg.com/564x/93/5b/7f/935b7f1a57d78b4c68bd0a7598dfa442.jpg",
    },
    {
      title: "Lemmy Koopa",
      description: "adpoted by Browser ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrexwlqaTmuF-MZ1H9Q-r8fihrArikqCT0JGnB8QePTktI9UYXWq0bQtZwKLfylSS4IDs&usqp=CAU",
    },
    {
      title: "Toadsworth",
      description: "Elderly Toad",
      image: "https://static.wikia.nocookie.net/mario/images/0/0e/Toadsworth_SMS_artwork.png",
    },
    {
      title: "Honey Queen",
      description: "Boss of fourth World ",
      image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-7/9/94/Character-honey-queen.png",
    },
    {
      title: "E.Gadd",
      description: " gadget-inventing scientist  ",
      image: "https://static.wikia.nocookie.net/pm-universe/images/f/fa/Professor_Elvin_Gadd_Artwork_-_Luigi%27s_Mansion_Dark_Moon.png",
    },
    {
      title: "Monty Mole",
      description: "Mole ",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Toad_by_Shigehisa_Nakaue.png",
    },
    {
      title: "Metal Mario",
      description: "Transformed Mario",
      image: "https://static.wikia.nocookie.net/mario/images/7/7e/Metal_Mario_Artwork_2_-_Mario_Kart_7.png",
    },
    {
      title: "King Bob-omb",
      description: "First boss in the game ",
      image: "https://static.wikia.nocookie.net/mario/images/e/e2/MPSR_King_Bob_omb.png",
    },
    {
      title: "Donkey Kong",
      description: "King  among Them",
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Donkey_Kong_character.png/220px-Donkey_Kong_character.png",
    },
    {
      title: "Mallow",
      image: "https://static.wikia.nocookie.net/nintendo/images/4/42/Mallow_%28Remake%29.png",
    },
    {
      title: "Poochy",
      description: "Hybrid ",
      image: "https://static.wikia.nocookie.net/mariokart/images/3/3e/Poochy.png",
    },
    {
      title: "Ludwig von Koopa",
      description: "Eldest leader of the koopalings ",
      image: "https://static.wikia.nocookie.net/papermario/images/b/b3/PMCS_Ludwig-0.png",
    },
    {
      title: "Pauline",
      description: "lady in japan ",
      image: "https://i.pinimg.com/736x/c9/96/5e/c9965e05bc35d26822b5805c21fd73c2.jpg",
    },
    {
      title: "Petey Piranha",
      image: "https://static.wikia.nocookie.net/ssb/images/5/59/Petey_Piranha_SSBB_artwork.png",
    },
    {
      title: "Mojor Burrows",
      image: "https://static.wikia.nocookie.net/fantendo/images/5/53/Major_Burrows.png",
    },
    {
      title: "Misstar",
      image: "https://static.wikia.nocookie.net/mario/images/0/0c/Misstar_%28MP5%29.png",
    },
    {
      title: "Parakarry",
      image: "https://static.wikia.nocookie.net/papermario/images/a/af/Parakarry_SPM.png",
    },
    {
      title: "Midbus",
      image: "https://static.wikia.nocookie.net/villainous-benchmark/images/f/ff/Midbus_Villains_wiki.jpeg",
    },
    {
      title: "Merlon",
      image: "https://static.wikia.nocookie.net/adventures-of-chris-and-tifa/images/7/77/SPM_Merlon.png",
    },
    {
      title: "Merlumina",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4to0cJk0VXMlNaVt2_lu65w22pnO0T_KyffK0hNFObN3GIdNlP-xznpXPPBc3625qE0&usqp=CAU",
    },
    {
      title: "Muskular",
      image: "https://static.wikia.nocookie.net/mario/images/2/2e/Mparty5_muskular.jpg",
    },
    {
      title: "Boshi",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dks4ymHZK3vNB84eGoaKBzK5DRJxFYsSwP59X4riMRYypO42akYBnEOsEb3yJKfPm7Y&usqp=CAU",
    },
    {
      title: "Pianta",
      image: "https://img1.picmix.com/output/stamp/thumb/1/8/7/2/2322781_0274c.png",
    },
    {
      title: "Bow",
      image: "https://nintendo.fandom.com/wiki/Bow?file=BowPaperMarioArt.png",
    },
    {
      title: "Hammer Bro.",
      image: "https://static.wikia.nocookie.net/mario/images/4/4b/Hammer_Bro_SM3DL_artwork.png",
    },
    {
      title: "Captian Toad",
      image: "https://i.pinimg.com/736x/f8/a2/39/f8a2399876070eb6e7cef243d0c0fcea.jpg",
    },
    {
      title: "Diddy Kong",
      image: "https://static.wikia.nocookie.net/mario/images/6/64/MK8D_BCP_Diddy_Kong_Artwork.png",
    },
    {
      title: "Baby Peach",
      image: "https://static.wikia.nocookie.net/mario/images/8/89/Baby_Peach_Sluggers.png",
    },
    {
      title: "Baby Daisy",
      image: "https://static.wikia.nocookie.net/mario/images/b/be/Baby_Daisy.png",
    },
    {
      title: "Baby Luigi",
      image: "https://static.wikia.nocookie.net/mario/images/9/96/Baby_Luigi.png",
    },
    {
      title: "Koopa Kid",
      image: "https://static.wikia.nocookie.net/mario/images/c/c8/Koopa_Kid_MP6_artwork.jpg",
    },
    {
      title: "Ninja",
      image: "https://play.nintendo.com/images/PLAY-6579-Ninji-FriendPage-Circle_v01.7bf2a8f2.aead314d58b63e27.jpg",
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
