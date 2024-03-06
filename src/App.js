import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decCount, incCount } from './redux/actions/action';

function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const handleClick = () => {
     dispatch(incCount())
  }

  const handleClickDec = () => {
    dispatch(decCount())
  }
  return (
  <>
    <h1>Redux Increment Decrement</h1>

    <p style={{fontSize: 50}} >{count}</p>

    <button onClick={handleClick}>Increment</button>
    <button onClick={handleClickDec}>Decrement</button>    



  </>
  );
}

export default App;
