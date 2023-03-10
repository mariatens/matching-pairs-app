import { useState } from "react";
import { Card } from "../App";
import { makeCards } from "../coreGame/game"

type NoneTurned = { title: "none-turned" }
type OneTurned = { title: "one-turned"; firstCard: Card};
type TwoTurned = { title: "two-turned"; firstCard: Card; secondCard: Card};
type TurnState = NoneTurned | OneTurned | TwoTurned;

export default function GameBoard(): JSX.Element {
    const [allCards, setAllCards] = useState<Card[]>(makeCards());

    const [turnState, setTurnState] = useState<TurnState>( {title: "none-turned"})

    const handleFlipCard = (cardToFlip:Card) => {
        const updatedCards: Card[] = allCards.map((oneCard) => {
            if(cardToFlip.id === oneCard.id){
                return {...oneCard, life: "faceUp"}
            }
        return oneCard
    })
        setAllCards(updatedCards)
    } 

    const handleCardClicked=(card:Card)=>{
        if (turnState.title === "none-turned" ) {
            handleFlipCard(card)
            setTurnState({title: "one-turned", firstCard: card})
        }
        else if (turnState.title === "one-turned"){
            handleFlipCard(card)
            setTurnState({title: "two-turned", firstCard: turnState.firstCard, secondCard: card})
        }
        else{
            if(turnState.firstCard.emoji === turnState.secondCard.emoji){
                removeTwoCards(turnState.firstCard, turnState.secondCard)
                console.log("You found the matching pairs!")
                
            }
            else{
                turnTwoCardsDown(turnState.firstCard, turnState.secondCard) 

            }
            setTurnState({title : "none-turned"})
            console.log("Clicked when two cards are already over, doing nothing")
        }
    }


    return (
        <>
            <h1>Game Board</h1>
            <p>{turnState.title}</p>

            <div className="all-cards">
                {allCards.map(card => {
                    return (
                        <div key={card.id} className = {`card ${card.life}`} onClick = {()=> handleCardClicked(card)}>
                            {card.life === "faceUp" && <p>{card.emoji}</p>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

function turnTwoCardsDown(firstCard: Card, secondCard: Card) {
//     throw new Error("Function not implemented.");
}

function removeTwoCards(firstCard: Card, secondCard: Card) {
    // throw new Error("Function not implemented.");
}

