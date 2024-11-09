import React, { useState } from 'react';
import './App.css';

function App() {
  // Array to create 8 cards
  const cards = Array.from({ length: 15 }, (_, index) => index + 1);

  // Array of colors for each card when clicked
  const colors = [
    '#FFB6C1', // Light Pink
    '#FFD700', // Gold
    '#98FB98', // Pale Green
    '#87CEFA', // Light Sky Blue
    '#FFA07A', // Light Salmon
    '#DDA0DD', // Plum
    '#F08080', // Light Coral
    '#DDA0DD', // Plum
    '#F08080', // Light Coral
    '#FFA07A', // Light Salmon
    '#DDA0DD', // Plum
    '#F08080', // Light Coral
    '#DDA0DD', // Plum
    '#F08080', // Light Coral
    '#20B2AA'  // Light Sea Green
  ];

  // State to keep track of clicked cards
  const [clickedCards, setClickedCards] = useState(new Set());

  const handleCardClick = (index) => {
    setClickedCards((prevClickedCards) => {
      const newClickedCards = new Set(prevClickedCards);
      if (newClickedCards.has(index)) {
        newClickedCards.delete(index); // Unset if clicked again
      } else {
        newClickedCards.add(index); // Set if clicked
      }
      return newClickedCards;
    });
  };

  return (
    <div className="flashcards-container">
      {cards.map((card, index) => (
        <div
          key={card}
          className={`flashcard ${clickedCards.has(index) ? 'clicked' : ''}`}
          style={{
            '--hover-color': colors[index] // Set custom property for each card
          }}
          onClick={() => handleCardClick(index)}
        >
          <div className="card-inner">
            <div className="card-front">
              Card {card}
            </div>
            <div className="card-back">
              Back of Card {card}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
