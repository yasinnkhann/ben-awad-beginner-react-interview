import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
	},
	reducers: {
		increment: state => {
			state.count += 1;
		},
	},
});

export const { increment } = counterSlice.actions;
export const countSelector = state => state.counter.count;
export default counterSlice.reducer;
