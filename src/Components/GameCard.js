import React, { useEffect, useState} from 'react'
import './GameCard.css';
import ReactCardFlip from 'react-card-flip';

export function GameCard(props) {
    const [id, setId] = useState();
    const [flipped, setFlipped] = useState();
    const [found, setFound] = useState();
    
    useEffect(() => {
        setId(props.id);
        setFlipped(props.flipped);
        setFound(props.found);
    }, [props.id, props.flipped, props.found])
  
    const flipCard = e => {
        // e.preventDefault()
        if (props.found || props.flipped) return;
        props.flip(e.target.id);
      };
    
      const cardBack = {
        background: "#3700B3",
      }
    return (
        <div className="card">
        <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
          <div id={id}
            className="memoryCard front"
            onClick={flipCard}
            style={cardBack}
            key="front"
          />
          <div
            className="memoryCard"
            onClick={flipCard}
            key="back"
            style={{
              backgroundImage: `url(${props.imgUrl})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat", backgroundPosition: "center",
              backgroundColor: found ? "green" : "#3700B3",
              cursor : found ? "" : "pointer",
            }}
          >
          </div>
        </ReactCardFlip>
      </div>
    );
  }


  export default GameCard;