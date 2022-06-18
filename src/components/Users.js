import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function Users() {
	const [randomUsers, setRandomUsers] = useState([]);
	const [isLoaded, setIsLoaded] = useState(false);
	const [pageCount, setPageCount] = useState(1);

	const fetchAPIRef = useRef(() => {});

	fetchAPIRef.current = async abortController => {
		try {
			const { data } = await axios.get('https://randomuser.me/api', {
				params: {
					page: pageCount,
				},
				signal: abortController.signal,
			});
			console.log(data);
			console.log(data.results);
			setRandomUsers(currUsers => [...currUsers, ...data.results]);
		} catch (err) {
			console.error(err);
		}
		setIsLoaded(true);
	};

	useEffect(() => {
		const abortController = new AbortController();
		fetchAPIRef.current(abortController);
		return () => abortController.abort();
	}, [pageCount]);

	if (!isLoaded) {
		return <div>Loading...</div>;
	}

	const getFullName = userInfo => {
		return `${userInfo.name.first} ${userInfo.name.last}`;
	};

	return (
		<div>
			<button onClick={() => setPageCount(currPage => currPage + 1)}>
				Load More
			</button>
			<div>
				{randomUsers.map(user => (
					<div key={user.login.uuid}>
						<p>{getFullName(user)}</p>
						<img src={user.picture.large} alt='user' />
					</div>
				))}
			</div>
		</div>
	);
}
