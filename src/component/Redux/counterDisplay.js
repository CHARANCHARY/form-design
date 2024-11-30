import React from 'react';
import { useSelector } from 'react-redux';


const CounterDisplay =() => {
    const countValue = useSelector((state) => state.counter.count)
  return (
    <h1>
        counte_value :  {countValue}
    </h1>
  )
}

export default CounterDisplay