import React, { useEffect, useState } from "react";

const url = "https://pokeres.bastionbot.org/images/pokemon";


export default function Memory() {
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);

  const pokemons = [
    { id: 1, name: "balbasaur" },
    { id: 8, name: "wartotle" },
    { id: 9, name: "blastoise" },
    { id: 6, name: "charizard" },
    { id: 2, name: "two" },
    { id: 3, name: "three" },
    { id: 4, name: "four" },
    { id: 5, name: "five" },
    { id: 7, name: "seven" },
    { id: 10, name: "ten" },
    { id: 11, name: "eleven" },
    { id: 12, name: "twelve" },
    { id: 13, name: "thirteen" },
    { id: 14, name: "fourteen" },
    { id: 15, name: "fifteen" },
    { id: 16, name: "sixteen" },
    { id: 17, name: "seventeen" },
    { id: 18, name: "eighteen" },
  ];

  // const pairOfPokemons = [...pokemons, ...pokemons];
  const pairOfPokemons = [
    pokemons[11],pokemons[10],
    pokemons[4],pokemons[3],
    pokemons[2],pokemons[14],
    pokemons[8],pokemons[13],
    pokemons[16],pokemons[7],
    pokemons[15],pokemons[2],
    pokemons[17],pokemons[5],
    pokemons[1],pokemons[12],
    pokemons[9],pokemons[8],
    pokemons[6],pokemons[15],
    pokemons[10],pokemons[11],
    pokemons[12],pokemons[9],
    pokemons[0],pokemons[17],
    pokemons[3],pokemons[1],
    pokemons[14],pokemons[16],
    pokemons[7],pokemons[0],
    pokemons[5],pokemons[4],
    pokemons[13],pokemons[6],
    // pokemons[1],pokemons[1],
  ];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;
    const firstMatched = pairOfPokemons[openedCard[0]];
    const secondMatched = pairOfPokemons[openedCard[1]];
    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }
    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div className="topper">
      <div className="bxs">
        <div className="cards">
          {/* {shuffle(pairOfPokemons)} */}
          {pairOfPokemons.map((pokemon, index) => {
            let isFlipped = false;
            if (openedCard.includes(index)) isFlipped = true;
            if (matched.includes(pokemon.id)) isFlipped = true;
            return (
              <div
                className={`pokemon-card ${isFlipped ? "flipped" : ""} `}
                key={index}
                onClick={() => flipCard(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img
                      src={`${url}/${pokemon.id}.png`}
                      alt="pokemon-name"
                      width="40"
                    />
                  </div>
                  <div className="back"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
