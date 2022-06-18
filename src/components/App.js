import React from 'react';
import Counter from './Counter';
import Users from './Users';
import CounterRedux from './CounterRedux';
import UsersRedux from './UsersRedux';
import '../styles/App.css';

function App() {
	return (
		<div className='app'>
			<Counter />
			<Users />
			{/* <CounterRedux />
			<UsersRedux /> */}
		</div>
	);
}

export default App;
