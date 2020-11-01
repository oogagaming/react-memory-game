import React, { useEffect, useState} from 'react'
import useSound from 'use-sound'
import './GameCard.css';
import ReactCardFlip from 'react-card-flip';
import front from '../pictures/front.png'
import Card from '../Sounds/Card.ogg'

export function GameCard(props) {
    const [id, setId] = useState();
    const [flipped, setFlipped] = useState();
    const [found, setFound] = useState();
    const [play] = useSound(Card)

    useEffect(() => {
        setId(props.id);
        setFlipped(props.flipped);
        setFound(props.found);
    }, [props.id, props.flipped, props.found])
  
    const flipCard = e => {
        e.preventDefault()
        play();
        if (found || flipped) return;
        props.flip(e.target.id);
      };
    return (
        <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <img
            id={id}
            className="memoryCard front"
            onClick={flipCard}
            //style={cardBack}
            key="front"
            src={front}
            alt=""
          />
          <div
            className="memoryCard"
            // onClick={flipCard}
            key="back"
          >
             <img src={props.imgUrl} width="96" height="96" alt="" />
          </div>
        </ReactCardFlip>
      </div>
    );
  }


  export default GameCard;