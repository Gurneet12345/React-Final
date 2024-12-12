import React from "react";
import { Link } from "react-router-dom";
import "./CharactersPage.css";

function CharactersPage() {
  // Character data with names and image URLs
  const charactersData = [
    { name: "Mario", image: "https://mario.nintendo.com/static/86bd56fed456e9b642100519880b6a86/b3853/mario.png" },
    { name: "Princess Peach", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Princess_Peach_Stock_Art.png/170px-Princess_Peach_Stock_Art.png" },
    { name: "Kamek", image: "https://e7.pngegg.com/pngimages/418/95/png-clipart-mario-kart-7-bowser-kamek-mario-bros-mario-kart-heroes-nintendo.png" },
    { name: "Birdo", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbQD8RBKOA_-OiGZ85nXmci2tKEHYXZ5V9qjmcKs6DoLZh1HhM74ap5iwUS0bluYzeRc&usqp=CAU" },
    { name: "Nabbit", image: "https://static.wikia.nocookie.net/mario/images/f/f7/SMBW_Nabbit.webp" },
    { name: "Toadette", image: "https://i.pinimg.com/236x/dc/9d/22/dc9d227d421cae78d533b16bff95ef04.jpg" },
    { name: "Fawful", image: "https://static.wikia.nocookie.net/hello-yoshi/images/e/eb/1168px-Fawful_artwork_MLBiS.png" },
    { name: "Toadsworth", image: "https://static.wikia.nocookie.net/mario/images/0/0e/Toadsworth_SMS_artwork.png" },
    { name: "Monty Mole", image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Toad_by_Shigehisa_Nakaue.png" },
    { name: "Donkey Kong", image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Donkey_Kong_character.png/220px-Donkey_Kong_character.png" },
    { name: "Ludwig von Koopa", image: "https://static.wikia.nocookie.net/papermario/images/b/b3/PMCS_Ludwig-0.png" },
    { name: "Major Burrows", image: "https://static.wikia.nocookie.net/fantendo/images/5/53/Major_Burrows.png" },
    { name: "Midbus", image: "https://static.wikia.nocookie.net/villainous-benchmark/images/f/ff/Midbus_Villains_wiki.jpeg" },
    { name: "Muscular", image: "https://static.wikia.nocookie.net/mario/images/2/2e/Mparty5_muskular.jpg" },
    { name: "Bow", image: "https://nintendo.fandom.com/wiki/Bow?file=BowPaperMarioArt.png" },
    { name: "Diddy Kong", image: "https://static.wikia.nocookie.net/mario/images/6/64/MK8D_BCP_Diddy_Kong_Artwork.png" },
    { name: "Baby Luigi", image: "https://static.wikia.nocookie.net/mario/images/9/96/Baby_Luigi.png" },
    { name: "Luigi", image: "https://upload.wikimedia.org/wikipedia/en/b/be/Luigi_by_Shigehisa_Nakaue.png" },
    { name: "Rosalina", image: "https://static.wikia.nocookie.net/mario/images/5/56/Rosalina-MPTop100-Transparent.png" },
    { name: "Baby Rosalina", image: "https://static.wikia.nocookie.net/mk-tour/images/3/33/MKT_Artwork_BabyRosalina.png" },
    { name: "Wario", image: "https://upload.wikimedia.org/wikipedia/en/8/81/Wario.png" },
    { name: "Yoshi", image: "https://upload.wikimedia.org/wikipedia/pt/4/48/Yoshi.png" },
    { name: "King Boo", image: "https://static.wikia.nocookie.net/mk-tour/images/a/a9/King_Boo_Artwork_MSS.png" },
    { name: "Lakitu", image: "https://i.pinimg.com/564x/93/5b/7f/935b7f1a57d78b4c68bd0a7598dfa442.jpg" },
    { name: "Honey Queen", image: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/mario-kart-7/9/94/Character-honey-queen.png" },
    { name: "Metal Mario", image: "https://static.wikia.nocookie.net/mario/images/7/7e/Metal_Mario_Artwork_2_-_Mario_Kart_7.png" },
    { name: "Mallow", image: "https://static.wikia.nocookie.net/nintendo/images/4/42/Mallow_%28Remake%29.png" },
    { name: "Pauline", image: "https://i.pinimg.com/736x/c9/96/5e/c9965e05bc35d26822b5805c21fd73c2.jpg" },
    { name: "Misstar", image: "https://static.wikia.nocookie.net/mario/images/0/0c/Misstar_%28MP5%29.png" },
    { name: "Merlon", image: "https://static.wikia.nocookie.net/adventures-of-chris-and-tifa/images/7/77/SPM_Merlon.png" },
    { name: "Boshi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Dks4ymHZK3vNB84eGoaKBzK5DRJxFYsSwP59X4riMRYypO42akYBnEOsEb3yJKfPm7Y&usqp=CAU" },
    { name: "Hammer Bro.", image: "https://static.wikia.nocookie.net/mario/images/4/4b/Hammer_Bro_SM3DL_artwork.png" },
    { name: "Baby Peach", image: "https://static.wikia.nocookie.net/mario/images/8/89/Baby_Peach_Sluggers.png" },
    { name: "Koopa Kid", image: "https://static.wikia.nocookie.net/mario/images/c/c8/Koopa_Kid_MP6_artwork.jpg" },
    { name: "Bowser", image: "https://upload.wikimedia.org/wikipedia/en/d/d1/Bowser_by_Shigehisa_Nakaue.png" },
    { name: "Princess Daisy", image: "https://upload.wikimedia.org/wikipedia/en/e/eb/Princess_Daisy_by_Shigehisa_Nakaue.png" },
    { name: "Toad", image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Toad_by_Shigehisa_Nakaue.png" },
    { name: "Waluigi", image: "https://upload.wikimedia.org/wikipedia/en/c/c1/Waluigi_by_Shigehisa_Nakaue.png" },
    { name: "Bowser Jr.", image: "https://static.wikia.nocookie.net/mario/images/5/5d/Bowser_Jr_SMB_Wonder_artwork.png" },
    { name: "Iggy Koopa", image: "https://static.wikia.nocookie.net/ilvg/images/3/33/Iggy.jpg" },
    { name: "Lemmy Koopa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrexwlqaTmuF-MZ1H9Q-r8fihrArikqCT0JGnB8QePTktI9UYXWq0bQtZwKLfylSS4IDs&usqp=CAU" },
    { name: "E. Gadd", image: "https://static.wikia.nocookie.net/pm-universe/images/f/fa/Professor_Elvin_Gadd_Artwork_-_Luigi%27s_Mansion_Dark_Moon.png" },
    { name: "King Bob-omb", image: "https://static.wikia.nocookie.net/mario/images/e/e2/MPSR_King_Bob_omb.png" },
    { name: "Poochy", image: "https://static.wikia.nocookie.net/mariokart/images/3/3e/Poochy.png" },
    { name: "Petey Piranha", image: "https://static.wikia.nocookie.net/ssb/images/5/59/Petey_Piranha_SSBB_artwork.png" },
    { name: "Parakarry", image: "https://static.wikia.nocookie.net/papermario/images/a/af/Parakarry_SPM.png" },
    { name: "Merlumina", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA4to0cJk0VXMlNaVt2_lu65w22pnO0T_KyffK0hNFObN3GIdNlP-xznpXPPBc3625qE0&usqp=CAU" },
    { name: "Piantas", image: "https://img1.picmix.com/output/stamp/thumb/1/8/7/2/2322781_0274c.png" },
    { name: "Captain Toad", image: "https://i.pinimg.com/736x/f8/a2/39/f8a2399876070eb6e7cef243d0c0fcea.jpg" },
    { name: "Baby Daisy", image: "https://static.wikia.nocookie.net/mario/images/b/be/Baby_Daisy.png" },
    { name: "Ninji", image: "https://play.nintendo.com/images/PLAY-6579-Ninji-FriendPage-Circle_v01.7bf2a8f2.aead314d58b63e27.jpg" }
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
