import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const calculateTotal = () => {
    let totalNum = good + neutral + bad;
    setTotal(totalNum);
  }

  const calculateAverage = () => {
    let average = (good - bad) / total;
    if(isNaN(average)){
      average = 0;
    }
    setAverage(average);
  }

  const calculatePositive = () => {
    let positive = (good / total) * 100;
    if(isNaN(positive)){
      positive = 0;
    }
    setPositive(positive);
  }

  useEffect(()=>{
    calculateTotal();
    calculateAverage();
    calculatePositive();
  }, [good, neutral, bad, total]);

  return (
    <div>
      <h1>Give feedback</h1><br />
      <button onClick={()=> {setGood(good => good+1)}}>good</button>
      <button onClick={()=> {setNeutral(neutral => neutral+1)}}>neutral</button>
      <button onClick={()=> {setBad(bad => bad+1)}}>bad</button><br />
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive}%</p>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)