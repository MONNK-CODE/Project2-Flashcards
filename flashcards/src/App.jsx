import React, { useState } from "react";
import "./App.css";
import flashcards from './flashcards.js';

const App = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const [flipped, setFlipped] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [feedback, setFeedback] = useState(null);
    const [currentStreak, setCurrentStreak] = useState(0);
    const [longestStreak, setLongestStreak] = useState(0);

    const checkAnswer = () => {
        const correctAnswer = flashcards[currentIndex].answer.toLowerCase().trim();
        const userInput = userAnswer.toLowerCase().trim();

        if (userInput === correctAnswer || isCloseMatch(userInput, correctAnswer)) {
            setFeedback("✅ Correct!");
            setCurrentStreak(prev => {
                const newStreak = prev + 1;
                if (newStreak > longestStreak) setLongestStreak(newStreak);
                return newStreak;
            });
        } else {
            setFeedback("❌ Incorrect! Try again.");
            setCurrentStreak(0);
        }
    };

    const isCloseMatch = (input, correct) => {
        return input.length > 2 && correct.includes(input);
    };

    const nextCard = () => {
        setCurrentIndex((currentIndex + 1) % flashcards.length);
        resetState();
    };

    const prevCard = () => {
        setCurrentIndex((currentIndex - 1 + flashcards.length) % flashcards.length);
        resetState();
    };

    const shuffleCards = () => {
        const randomIndex = Math.floor(Math.random() * flashcards.length);
        setCurrentIndex(randomIndex);
        resetState();
    };


    const resetState = () => {
        setShowAnswer(false);
        setFlipped(false);
        setUserAnswer("");
        setFeedback(null);
    };

    const getCardColor = (category) => {
        switch (category) {
            case "Easy": return "#A8D08D";
            case "Medium": return "#FFEB84";
            case "Hard": return "#F5A9A9";
            default: return "#FFFFFF";
        }
    };

    return (
        <div className="flashcard-container">
            <h1>Soccer Trivia</h1>
            <h2>Test Your Soccer Knowledge!</h2>
            <p>Total Cards: {flashcards.length}</p>
            <p>Category: {flashcards[currentIndex].category} | Subject: {flashcards[currentIndex].subject}</p>

            <div
                className={`flashcard ${flipped ? "flipped" : ""}`}
                onClick={() => setFlipped(!flipped)}
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

            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
            />
            <button onClick={checkAnswer}>Submit</button>
            {feedback && <p>{feedback}</p>}

            <div className="button-group">
                <button onClick={prevCard}>Back</button>
                <button onClick={nextCard}>Next</button>
                <button onClick={shuffleCards}>Shuffle</button>
            </div>

            <p>Current Streak: {currentStreak} | Longest Streak: {longestStreak}</p>
        </div>
    );
};

export default App;
