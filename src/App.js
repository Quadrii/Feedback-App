import React, {useState} from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import './App.css';

function App(props) {
    const [good, setGood] = useState(0)
    const [bad, setBad] = useState(0)
    const [neutral, setNeutral] = useState(0)

    const handleGoodFeedBack = () => {
      setGood(good + 1)
    }

    const handleBadFeedBack = () => {
      setBad(bad + 1)
    }

    const handleNeutral = () => {
      setNeutral(neutral + 1)
    }
  return (
    <frameElement>
      <Header />
      <button onClick={handleGoodFeedBack}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBadFeedBack }>Bad</button>
      <Stats />
      <span>Good Feedback: {good}</span>
      <span>Neutral Feedback: {neutral}</span>
      <span>Bad Feedback: {bad}</span>
    </frameElement>
  );
}

export default App;
