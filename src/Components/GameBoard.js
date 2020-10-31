import React, { useEffect, useState, useRef } from 'react'
import GameCard from './GameCard';
import './GameBoard.css'
import { Grid } from '@material-ui/core';

export function Gameboard(props) {
    const [gamecards, setGamecards] = useState([]);

    const prevCountRef = useRef();
    useEffect(() => {

        prevCountRef.current = gamecards

        if (prevCountRef !== gamecards) {
            setGamecards({
                gamecards: gamecards
                });
        }
        setGamecards(props.cards);
    }, [gamecards, props.cards])

    // const prevCount = prevCountRef.current;

    const countFlippedCards = () => {
        return gamecards.filter(({ flipped, found }) => flipped && !found).length;
        
      };

    const flipCard = (id, cb) => {
        setGamecards(prevCount => (
          {
            gamecards: prevCount.map(card => {
              if (card.id === id) {
                card.flipped = true;
              }
              return card;
            })
          })
        );
        
      };

    

    const handleFlip = id => {
        switch (countFlippedCards()) {
          case 0:
            flipCard(id);
            break;
          case 1:
            props.click();
            flipCard(id);
            isMatch();
            break;
          default:
            break;
        }
      };

    const isMatch = () => {
        const flippedCards = gamecards.filter(card => card.flipped && !card.found);
        let one = gamecards.indexOf(flippedCards[0])
        let two = gamecards.indexOf(flippedCards[1])
        console.log(flippedCards)
        console.log(two)
        if (flippedCards[0].matchesId === flippedCards[1].id ||
          flippedCards[1].matchesId === flippedCards[0].id) {
            console.log("if")
          setGamecards(prevCount => ({
            gamecards: prevCount.gamecards.map(card => {
              switch (card.id) {
                case flippedCards[0].id:
                case flippedCards[1].id:
                  card.found = true;
                  return card;
                default:
                  return card;
              }
            })
          }));
        } else {
          setTimeout(() => {
            gamecards[one].flipped = false;
            gamecards[two].flipped = false;
            setGamecards(gamecards);
          }, 800);
        }
      };


    const hasWon = () => {
        let won = gamecards.every(card => card.found);
        if (won) {
          props.won();
        }
      };


    const createBoard = () => {
        let memoryCards = gamecards
        return memoryCards.length ? (
          memoryCards.map(card => (
            <Grid item key={card.id}>
            <GameCard
              key={card.id}
              flipped={card.flipped}
              found={card.found}
              id={card.id}
              imgUrl={card.url}
              flip={handleFlip} />
              </Grid>
          ))
        ) : (
            <p>Loading cards...</p>
          );
          
    }
        return (
          <Grid 
            container 
            spacing={3} 
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            {createBoard()}
            </Grid>
        );
    }

    export default Gameboard;