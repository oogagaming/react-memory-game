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

    const countFlippedCards = () => {
        // const { memoryCards } = gamecards;
        // console.log(gamecards.filter(({ flipped, found }) => flipped && !found).length)
        return gamecards.filter(({ flipped, found }) => flipped && !found).length;
        
      };

    const flipCard = (id, cb) => {
        console.log("flipCard")
        setGamecards(prevCountRef => (
          {
            gamecards: prevCountRef.map(card => {
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
        // const { memoryCards } = gamecards;
        // console.log(memoryCards)
        const flippedCards = gamecards.filter(card => card.flipped && !card.found);
        if (flippedCards[0].matchesId === flippedCards[1].id ||
          flippedCards[1].matchesId === flippedCards[0].id) {
          setGamecards(prevCountRef => ({
            gamecards: prevCountRef.gamecards.map(card => {
              switch (card.id) {
                case flippedCards[0].id:
                case flippedCards[1].id:
                  card.found = true;
                  return card;
                default:
                  return card;
              }
            })
          }),
          hasWon());
        } else {
          setTimeout(() => {
            gamecards[gamecards.indexOf(flippedCards[0])].flipped = false;
            gamecards[gamecards.indexOf(flippedCards[1])].flipped = false;
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
        console.log(memoryCards)
        return memoryCards.length ? (
          memoryCards.map(card => (
            <Grid item>
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
          <Grid container spacing={3}>
            {createBoard()}
            </Grid>
        );
    }

    export default Gameboard;