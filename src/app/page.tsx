"use client";
import { Card } from "./card";
import { CardData } from "./data";
import "./page.css";

export default function Home() {
  function handleClick(foo: string) {
    console.log(foo);
  }

  return (
    <div className="game-container">
      {CardData.sort(() => Math.random() - 0.5).map((item) => {
        return <Card state={false} id={item.id} img={item.img} test={handleClick} />;
      })}
    </div>
  );
}
