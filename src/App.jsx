import React from "react";
import Slide from "./Slide";


export default function App()
{
  const slides = [
    {
      id: "Slide 1",
      text: "Texto do slide 1"
    },
    {
      id: "Slide 2",
      text: "Texto do slide 2"
    },
    {
      id: "Slide 3",
      text: "Texto do slide 3"
    }
  ];

  return (
    <div>
      <h1>App</h1>
      <Slide slides={slides} />
    </div>
  );
}