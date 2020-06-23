import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Content from './components/content';
import Total from './components/total';

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a component';
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} exercise1={exercises1} exercise2={exercises2} exercise3={exercises3}/>
      <Total exercise1={exercises1} exercise2={exercises2} exercise3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))