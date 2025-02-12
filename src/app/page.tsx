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

export default function Home(): React.ReactElement {
  const [cards, setCards] = useState<Cardtype[]>(shuffeledData);
  const [disabled, setDisabled] = useState<boolean>(false);

  function test(card: Cardtype): void {
    card.state = !card.state;
    setCards([...cards]);
    chosenCards.push(card);
  }

  function checkWinner(): void {
    if (chosenCards.length === 2) {
      setDisabled(true);
      if (chosenCards[0].img !== chosenCards[1].img) {
        setTimeout(() => {
          test(chosenCards[0]);
          test(chosenCards[1]);
          chosenCards = [];
          setDisabled(false);
        }, 1000);
      } else if (chosenCards[0].img === chosenCards[1].img) {
        chosenCards[0].isMatch = true;
        chosenCards[1].isMatch = true;
        chosenCards = [];
        setDisabled(false);
      }
    }
  }

  return (
    <div className="game-container">
      {cards.map((card) => (
        <Card
          disabled={disabled}
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
