import React from 'react';
import { useDispatch } from 'react-redux';
import { increment,decrement,reset } from './CounterSlicer';


const CounterAction =() =>{
  const dispatcher = useDispatch();
  return (
    <div>
        <button onClick={(e) => dispatcher(increment())}>Increment</button>
        <button onClick={(e) => dispatcher(decrement())}>decrement</button>
        <button onClick={(e) => dispatcher(reset())}>reset</button>
    </div>
  )
}

export default CounterAction