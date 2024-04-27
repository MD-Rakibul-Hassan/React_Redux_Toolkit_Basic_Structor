
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decriment, incriment } from './counterSlice';

const Counter = () => {
    const counter = useSelector(state => state.counter.count)
    const dispatch = useDispatch();
    const handleCounter = () => {
        dispatch(incriment())
    }
    const handleCounterDecriment = () => {
        dispatch(decriment(3))
    }
  return (
		<div>
			<h1>Counter {counter}</h1>
			<button onClick={handleCounter}>Incriment</button>
			<button onClick={handleCounterDecriment}>Decriment</button>
		</div>
	);
}

export default Counter;
