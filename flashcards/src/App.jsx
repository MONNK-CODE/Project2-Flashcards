import React, { useState } from "react";
import "./App.css"; // We'll add some CSS for the flip effect
import flashcards from './flashcards.js';

const App = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const nextCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(randomIndex);
        setShowAnswer(false); // resets answer visibility
        setFlipped(false); // resets card flip state
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        setFlipped(!flipped); // this flips the card when showing the answer
    };

    // Determine the background color based on the category
    const getCardColor = (category) => {
        switch (category) {
            case "Easy":
                return "#A8D08D";
            case "Medium":
                return "#FFEB84";
            case "Hard":
                return "#F5A9A9";
            default:
                return "#FFFFFF";
        }
    };

    return (
        <div className="flashcard-container">
            <h1>Soccer Trivia Flashcards</h1>
            <h2>Lets test your Soccer Knowledge here!</h2>
            <p>Total Cards: {flashcards.length}</p>
            <p>{`Category: ${flashcards[currentIndex].category} | Subject: ${flashcards[currentIndex].subject}`}</p>
            <div
                className={`flashcard ${flipped ? "flipped" : ""}`}
                onClick={toggleAnswer}
                style={{backgroundColor: getCardColor(flashcards[currentIndex].category)}}
            >
                <div className="card-front">
                    <img src={flashcards[currentIndex].image} alt="Flashcard" className="flashcard-image"/>
                    <p>{flashcards[currentIndex].question}</p>
                </div>
                <div className="card-back">
                    <p>{flashcards[currentIndex].answer}</p>
                </div>
            </div>
            <button onClick={nextCard}>Next Card</button>
        </div>
    );
};

export default App;
