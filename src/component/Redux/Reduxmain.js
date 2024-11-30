import React from 'react';
import CounterAction from './counterAction';
import CounterDisplay from './counterDisplay';
import { Provider } from 'react-redux';
import { store } from '../../store';

const  Reduxmain = () =>{
  return (
      <Provider store={store}>
        <CounterDisplay />
        <CounterAction />
      </Provider>
  )
}

export default Reduxmain