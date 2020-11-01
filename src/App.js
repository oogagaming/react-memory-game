import './App.css';
import { Button } from '@material-ui/core';
import { useState, useEffect, useRef } from 'react';
import { Gameboard } from './Components/GameBoard';
import meme1 from './pictures/meme1.png'
import meme2 from './pictures/meme2.png'
import meme3 from './pictures/meme3.png'
import meme4 from './pictures/meme4.png'
import meme5 from './pictures/meme5.png'
import meme6 from './pictures/meme6.png'
import meme7 from './pictures/meme7.png'
import meme8 from './pictures/meme8.png'
import meme81 from './pictures/meme8.1.png'
import meme9 from './pictures/meme9.png'
import meme10 from './pictures/meme10.png'
import meme11 from './pictures/meme11.png'
import meme12 from './pictures/meme12.png'
import meme13 from './pictures/meme13.png'


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
    const ids = []
    let id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    while(ids.includes(id)) {
      id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      ids.push(id)
    }
    ids.push(id)
    return id;
  }

  const makeDeck = () => {
    let amount = 13;
    let gamecards = [];
    for (let i = 1; i < amount + 1; i++) {
      let id = createId();
      let id2 = createId();
      let img = '';
      switch(i) {
        case 1:
          img = meme1
          break;
        case 2:
          img = meme2
          break;
        case 3:
            img = meme3
            break;
        case 4:
          img = meme4
          break;
        case 5:
          img = meme5
          break;
        case 6:
          img = meme6
          break;
        case 7:
          img = meme7
          break;
        case 8:
          break;
        case 9:
          img = meme9
          break;  
        case 10:
          img = meme10
          break;
        case 11:
          img = meme11
          break;
        case 12:
          img = meme12
          break;
        case 13:
          img = meme13
          break;
        default:
          break;
      }
      var card1 = {};
      var card2 = {};
      if(i === 8) {
        card1 = {
          id: id,
          matchesId: id2,
          url: meme8,
          flipped: false,
          found: false,
        }
        card2 = {
          id: id2,
          matchesId: id,
          url: meme81,
          flipped: false,
          found: false,
        }
      }else {
        card1 = {
          id: id,
          matchesId: id2,
          url: img,
          flipped: false,
          found: false,
        }
        card2 = {
          id: id2,
          matchesId: id,
          url: img,
          flipped: false,
          found: false,
        }
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
    setNewGame(true);
    setWon(false)
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
      <link rel="icon" href={meme6} />
        {won ? <h1 style={{color: 'white'}}>You Win</h1> : null}
        {newGame ? <Gameboard cards={cards} won={hasWon} click={countClicks}/>: <h1 style={{color: 'white'}}>Memeory Game</h1> }
        
      <div className="button">
        {won ? <Button className="Button" color="primary" variant="contained" onClick={initGame}>Play Again</Button>:null}
        {!newGame ? <Button className="Button" color="primary" variant="contained" onClick={initGame}>Play</Button> : null}
      </div>
    </div>
  );
}

export default App;
