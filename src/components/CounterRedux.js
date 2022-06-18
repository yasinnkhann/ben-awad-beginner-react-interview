import React from 'react';
import { increment, countSelector } from '../features/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function CounterRedux() {
	const dispatch = useDispatch();
	const count = useSelector(countSelector);
	return (
		<div>
			<p>You clicked {count} times</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	);
}
