import React from 'react';
import Statistic from './Statistic';

const Statistics = (props) => {
    const {good, neutral, bad} = props;
  
    let total = good+neutral+bad;
    let average = isNaN(((good - bad) / total)) ? 0 : ((good - bad) / total);
    let positive = isNaN(((good / total) * 100)) ? 0 : ((good / total) * 100);
  
    if(good === 0 && neutral === 0 && bad === 0){
      return (
        <>
          <h1>Statistics</h1>
          <p>No feedback given</p>
        </>
      )
    }
    else{
      return (
        <>
          <h1>Statistics</h1>
          <Statistic text="Good" value={good} />
          <Statistic text="Neutral" value={neutral} />
          <Statistic text="Bad" value={bad} />
          <Statistic text="All" value={total} />
          <Statistic text="Average" value={average} />
          <Statistic text="Positive" value={positive} />
        </>
      )
    }
  };

export default Statistics;