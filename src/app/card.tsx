"use client";

interface CardProps {
  id?: number;
  img: string;
  state: boolean;
  disabled: boolean;
  test: () => void;
}

export const Card = (props: CardProps) => {
  return (
    <>
      <div
        onClick={!props.disabled ? () => props.test() : undefined}
        className={`card ${props.state ? "flipped" : ""}`}
      >
        {props.state ? (
          <img src={props.img} alt="Card front" />
        ) : (
          <img src="./back.png" alt="Card back" />
        )}
      </div>
    </>
  );
};
