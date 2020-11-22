import React, { useState } from "react";
import { EXPEDITIONS, TREASURES } from "./cards";

// Create the context. Empty function allows us to call setState
export const CardContext = React.createContext([{}, () => {}]);

export const newExpeditionDeck = () => {
  return shuffle(EXPEDITIONS);
}

export const newTreasureDeck = () => {
  return shuffle(TREASURES);
}

const shuffle = (deck) => {
  return deck
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
}

const CardContextProvider = (props) => {
  const [state, setState] = useState({
    expeditionDeck: newExpeditionDeck(),
    treasureDeck: newTreasureDeck(),
    currentRound: 1, // seven rounds per phase
    currentPhase: 1, // four phases per game
    currentTreasure: 0
  });
  
  return (
    <CardContext.Provider value={[state, setState]}>
      {props.children}
    </CardContext.Provider>
  )
};

export default CardContextProvider;
