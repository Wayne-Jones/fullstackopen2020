import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);
  const [votes, setVotes] = useState([0,0,0,0,0,0]);



  const chooseRandom = () => {
    let length = props.anecdotes.length;
    let randomNumber = Math.floor(Math.random() * length);
    setSelected(randomNumber);
  }

  const maxVotes = (voteArray) => {
    let max = 0;
    let index = 0;
    for(let i = 0; i< voteArray.length; i++){
      let voteNum =  voteArray[i];
      if(voteNum > max){
        index = i;
        max = voteNum;
      }
    }
    setMaxIndex(index);
  }

  const vote = () =>{
    let copy = [...votes];
    copy[selected]++;
    setVotes(copy);
    maxVotes(copy);
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <button onClick={()=>vote()} >Vote</button>
      <button onClick={()=>chooseRandom()} >Next anecdote</button>

      <h1>Anecdote with the most votes</h1>>
      {props.anecdotes[maxIndex]}
      <p>has {votes[maxIndex]} votes</p>
    </div>
  );
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)