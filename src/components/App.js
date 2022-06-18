import React from 'react';
import Counter from './Counter';
import Users from './Users';
import '../styles/App.css';

function App() {
	return (
		<div className='app'>
			<Counter />
			<Users />
		</div>
	);
}

export default App;
