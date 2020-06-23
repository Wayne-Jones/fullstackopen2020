import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Statistics from './components/Statistics';
import Button from './components/Button';


const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>      
      <h1>Give feedback</h1><br />
      <Button name="good" clickHandler={setGood} />
      <Button name="neutral" clickHandler={setNeutral} />
      <Button name="bad" clickHandler={setBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)