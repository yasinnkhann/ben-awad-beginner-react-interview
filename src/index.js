import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './components/App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);
// remove strict mode to not get the double render side-effect but this would go away in prod!
root.render(
	// <React.StrictMode>
	<Provider store={store}>
		<App />
	</Provider>
	// </React.StrictMode>
);
