import React, { useState, useEffect } from "react";
import "./style.css";

import erenImg from "../img/eren.webp";
import mikasaImg from "../img/mikasa.webp";
import arminImg from "../img/armin.webp";
import connyImg from "../img/conny.webp";
import historiaImg from "../img/historia.webp";
import jeanImg from "../img/jean.webp";
import annieImg from "../img/annie.webp";
import reinerImg from "../img/reiner.webp";
import hanjiImg from "../img/hanji.webp";

const Cards = (props) => {
  const cards = [
    ["Eren", erenImg],
    ["Mikasa", mikasaImg],
    ["Armin", arminImg],
    ["Conny", connyImg],
    ["Historia", historiaImg],
    ["Jean", jeanImg],
    ["Annie", annieImg],
    ["Reiner", reinerImg],
    ["Hanji", hanjiImg],
  ];

  const [clickedCards, setClickedCards] = useState(new Set());

  useEffect(() => {
    displayCardsRandomly();

    return () => {
      const cards = document.querySelectorAll(".card-img");
      cards.forEach((card) => card.removeEventListener("click", handleClick));
    };
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const clearCardGrid = () => {
    document.querySelector('.cards-grid').innerHTML = '';
  }

  const handleClick = (e) => {
    const cardId = e.target.id;
    if (clickedCards.has(cardId)) {
      setClickedCards(new Set(clickedCards.clear()));
      props.resetCurrScore();
    } else {
      setClickedCards(new Set(clickedCards.add(cardId)));
      props.incrementCurrScore();
    }
    clearCardGrid();
    displayCardsRandomly();
  };

  const displayCardsRandomly = () => {
    const copyCards = Array.from(cards);
    shuffle(copyCards);

    const grid = document.querySelector(".cards-grid");
    copyCards.forEach((card) => {
      const cardCell = document.createElement("div");

      const cardName = document.createElement("div");
      cardName.innerText = card[0];

      const cardImg = document.createElement("img");
      cardImg.classList.add("card-img");
      cardImg.id = card[0];
      cardImg.src = card[1];
      cardImg.addEventListener("click", handleClick);

      cardCell.appendChild(cardName);
      cardCell.appendChild(cardImg);

      grid.appendChild(cardCell);
    });
  };

  return (
    <div>
      <div className="cards-grid"></div>
    </div>
  );
};

export default Cards;
