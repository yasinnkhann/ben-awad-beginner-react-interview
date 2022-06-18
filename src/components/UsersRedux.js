import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	fetchUsers,
	fetchNextUser,
	usersSelector,
} from '../features/UsersSlice';

export default function UsersRedux() {
	const dispatch = useDispatch();
	const { users, isLoading, error } = useSelector(usersSelector);

	useEffect(() => {
		const abortController = new AbortController();
		dispatch(fetchUsers(abortController));
		return () => abortController.abort();
	}, [dispatch]);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		console.error(error);
		if (error.message === 'canceled') {
			return;
		}
		return <p>Error: {error.message}</p>;
	}

	const getFullName = user => `${user.name.first} ${user.name.last}`;

	return (
		<div>
			<button onClick={() => dispatch(fetchNextUser())}>Load More</button>
			{users.map(user => (
				<div key={user.login.uuid}>
					<p>{getFullName(user)}</p>
					<img src={user.picture.large} alt='user' />
				</div>
			))}
		</div>
	);
}
