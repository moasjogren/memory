"use client";
import { Card } from "./card";
import { CardData } from "./data";
import { JSX, useEffect, useState } from "react";
import "./page.css";

interface Cardtype {
  id: number;
  img: string;
  value: string;
  state: boolean;
  isMatch: boolean;
}

const shuffeledData: Cardtype[] = CardData.sort(() => Math.random() - 0.5);
let chosenCards: Cardtype[] = [];

export default function Home(): JSX.Element {
  const [cards, setCards] = useState<Cardtype[]>(shuffeledData);

  function test(card: Cardtype) {
    card.state = !card.state;
    setCards([...cards]);
    chosenCards.push(card);
  }

  function checkWinner() {
    if (chosenCards.length === 2) {
      if (chosenCards[0].img !== chosenCards[1].img) {
        setTimeout(() => {
          test(chosenCards[0]);
          test(chosenCards[1]);
          chosenCards = [];
        }, 1000);
      } else {
        chosenCards[0].isMatch = true;
        chosenCards[1].isMatch = true;
        chosenCards = [];
      }
    }
  }

  return (
    <div className="game-container">
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          test={() => {
            if (!card.isMatch) {
              test(card);
              checkWinner();
            }
          }}
          state={card.state}
          img={card.img}
        />
      ))}
    </div>
  );
}
