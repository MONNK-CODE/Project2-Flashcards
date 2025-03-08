import React, { useState } from "react";
import "./App.css"; // We'll add some CSS for the flip effect
import cup from "./assets/cup.png"

const App = () => {
    const flashcards = [
        {
            question: "Who won the 2022 FIFA World Cup?",
            answer: "Argentina",
            category: "Easy",
            subject: "Sports",
            image: cup
        },
        {
            question: "Who has the most Ballon d'Or awards?",
            answer: "Lionel Messi",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "What country has won the most World Cups?",
            answer: "Brazil",
            category: "Hard",
            subject: "Sports",
            image: null
        },
        {
            question: "Who is the all-time top scorer in the EPL?",
            answer: "Alan Shearer",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "In what sport would you perform a slam dunk?",
            answer: "Basketball",
            category: "Easy",
            subject: "Sports",
            image: null
        },
        {
            question: "How many players are on a standard baseball team?",
            answer: "9",
            category: "Easy",
            subject: "Sports",
            image: null
        },
        {
            question: "What is the name of the trophy awarded to the winner of the NFL's Super Bowl?",
            answer: "Vince Lombardi Trophy",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            answer: "Brazil",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "Who holds the record for the fastest 100m sprint?",
            answer: "Usain Bolt",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "What is the term for scoring three consecutive strikes in bowling?",
            answer: "Turkey",
            category: "Hard",
            subject: "Sports",
            image: null
        },
        {
            question: "Which golfer has won the most major championships?",
            answer: "Jack Nicklaus",
            category: "Hard",
            subject: "Sports",
            image: null
        },
        {
            question: "What is the name of the horse race that is the first leg of the Triple Crown?",
            answer: "Kentucky Derby",
            category: "Medium",
            subject: "Sports",
            image: null
        },
        {
            question: "In which sport is the term 'love' used to indicate a score of zero?",
            answer: "Tennis",
            category: "Easy",
        },
        {
            question: "What is the name of the championship for the NHL?",
            answer: "Stanley Cup",
            category: "Medium",
            subject: "Sports",
            image: null
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const nextCard = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(randomIndex);
        setShowAnswer(false); // Reset answer visibility
        setFlipped(false); // Reset card flip state
    };

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
        setFlipped(!flipped); // Flip the card when showing the answer
    };

    return (
        <div className="flashcard-container">
            <h1>Soccer Trivia Flashcards</h1>
                <h2>Lets test your Soccer Knowledge here!</h2>
            <p>Total Cards: {flashcards.length}</p>
            <p>{`Category: ${flashcards[currentIndex].category} | Subject: ${flashcards[currentIndex].subject}`}</p>
            <div className={`flashcard ${flipped ? "flipped" : ""}`} onClick={toggleAnswer}>
                <div className="card-front">
                    <img src={flashcards[currentIndex].image} alt="Flashcard" className="flashcard-image" />
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
