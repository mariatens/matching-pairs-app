import { useState } from "react";
import { Card } from "../App";
import { makeCards } from "../coreGame/game"

export default function GameBoard(): JSX.Element {
    const [allCards, setAllCards] = useState<Card[]>(makeCards());

    const handleFlipCard = (cardToFlip:Card) => {
        const updatedCards: Card[] = allCards.map((oneCard) => {
            if(cardToFlip.id === oneCard.id){
                return {...oneCard, life: "faceUp"}
            }
        return oneCard
    })
        setAllCards(updatedCards)
    } 

    return (
        <>
            <h1>Game Board</h1>
            <div className="all-cards">
                {allCards.map(card => {
                    return (
                        <div key={card.id} className = {`card ${card.life}`} onClick = {()=> handleFlipCard(card)}>
                            {card.life === "faceUp" && <p>{card.emoji}</p>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

