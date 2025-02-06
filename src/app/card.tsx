"use client";
import { useState } from "react";

export interface CardProps {
  id: number;
  img: string;
  value?: string;
  state?: boolean;
  test?: (foo: string) => void;
}

export const Card = (props: CardProps) => {
  const [isTurned, setIsTurned] = useState(props.state);

  function handleClick() {
    setIsTurned(true);
    props.test && props.test("Hej");
  }

  return (
    <>
      {isTurned ? (
        <div id={props.id.toString()} className="card">
          <img src={props.img} />
          <p style={{ display: "none" }}>{props.value}</p>
        </div>
      ) : (
        <div
          onClick={() => {
            handleClick();
          }}
          id={props.id.toString()}
          className="card"
        >
          <img src="./back.png" />
        </div>
      )}
    </>
  );
};
