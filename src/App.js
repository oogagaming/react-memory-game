import './App.css';
import { Button } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { Gameboard } from './Components/GameBoard';

function App() {
  const [cards, setCards] = useState()
  const [newGame, setNewGame] = useState()
  const [won, setWon] = useState(false)
  const [clicks, setClicks] = useState(0);

  const prevCountRef = useRef();
  useEffect(() => {
    prevCountRef.current = clicks
  })

  const createId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  const makeDeck = () => {
    let amount = 13;
    let gamecards = [];
    for (let i = 1; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let rand = Math.floor(Math.random() * 300) + 1;
      const card1 = {
        id: id,
        matchesId: id2,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      const card2 = {
        id: id2,
        matchesId: id,
        url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${rand}.png`,
        flipped: false,
        found: false,
      }
      gamecards.push(card1);
      gamecards.push(card2);
    }
    shuffleCards(gamecards);
    setCards(gamecards);
  }
  
  const shuffleCards = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  const initGame = () => {
    makeDeck();
    setNewGame({
      newGame: true
    });
  };

  const countClicks = () => {
    setClicks((prevCountRef) => ({
        clicks : prevCountRef.clicks + 1
    }));
  }

  const hasWon = () => {
    setWon(true)
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        {newGame ? <Gameboard cards={cards} won={hasWon} click={countClicks}/>: <p>Start game</p> }
        {won ? <h1>You Win</h1> : null}
      <div className="button">
      <Button className="Button" color="primary" variant="contained" onClick={initGame}>Play</Button>
      </div>
    </div>
  );
}

export default App;
