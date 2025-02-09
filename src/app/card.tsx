"use client";
import { useState } from "react";

export const Card = (props: any) => {
  return (
    <>
      <div onClick={() => props.test()} className="card">
        {props.state ? (
          <img src={props.img} alt="Card front" />
        ) : (
          <img src="./back.png" alt="Card back" />
        )}
      </div>
    </>
  );
};
