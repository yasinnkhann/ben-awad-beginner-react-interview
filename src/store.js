import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './features/CounterSlice';
import { usersSlice } from './features/UsersSlice';

export const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		users: usersSlice.reducer,
	},
});
