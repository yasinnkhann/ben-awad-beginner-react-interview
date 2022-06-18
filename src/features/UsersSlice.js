import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
	name: 'users',
	initialState: {
		isLoading: false,
		error: null,
		users: [],
		pageNum: 1,
	},
	reducers: {
		fetchingUsers: state => {
			state.isLoading = true;
		},
		fetchUsersSuccess: (state, action) => {
			state.isLoading = false;
			state.users = [...state.users, ...action.payload];
			state.error = null;
		},
		fetchUsersFailure: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		incrementPageNum: state => {
			state.pageNum += 1;
		},
	},
});

export const {
	fetchingUsers,
	fetchUsersSuccess,
	fetchUsersFailure,
	incrementPageNum,
} = usersSlice.actions;

export const fetchUsers = (abortController, nextPage) => async dispatch => {
	if (!nextPage) {
		dispatch(fetchingUsers());
	}
	try {
		const { data } = await axios.get('https://randomuser.me/api', {
			params: {
				page: usersSlice.pageNum,
			},
			signal: abortController ? abortController.signal : null,
		});
		dispatch(fetchUsersSuccess(data.results));
	} catch (err) {
		dispatch(fetchUsersFailure(err));
	}
};

export const fetchNextUser = () => async dispatch => {
	dispatch(incrementPageNum());
	dispatch(fetchUsers(null, 'next'));
};

export const usersSelector = state => state.users;
export default usersSlice.reducer;
