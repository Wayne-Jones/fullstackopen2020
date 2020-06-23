import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Statistics = (props) => {
  const {good, neutral, bad} = props;

  let total = good+neutral+bad;
  let average = isNaN(((good - bad) / total)) ? 0 : ((good - bad) / total);
  let positive = isNaN(((good / total) * 100)) ? 0 : ((good / total) * 100);

  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {total}</p>
      <p>Average {average}</p>
      <p>Positive {positive}%</p>
    </>
  )
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>      
      <h1>Give feedback</h1><br />
      <button onClick={()=> {setGood(good => good+1)}}>good</button>
      <button onClick={()=> {setNeutral(neutral => neutral+1)}}>neutral</button>
      <button onClick={()=> {setBad(bad => bad+1)}}>bad</button><br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)