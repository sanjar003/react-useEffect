import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Headers = () => {
	const [inputData, setInputData] = useState('');
	const [users, setUsers] = useState([]);
	console.log(users);

	const [inputData2, setInputData2] = useState('');

	useEffect(() => {
		getUsers();
	}, []);

	useEffect(() => {
		console.log(inputData.length);
	}, [inputData]);

	const getUsers = async () => {
		try {
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/users'
			);
			setUsers(response.data);
		} catch (error) {
			console.error('ошибку', error);
		}
	};
	const deleteUsers = () => {
		setUsers([]);
	};

	useEffect(() => {
		localStorage.setItem('', inputData2);
	}, [inputData2]);
	return (
		<div>
			<button onClick={deleteUsers}>Удалить</button>
			<button onClick={getUsers}>Добавить</button>

			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>

			<input
				type="text"
				value={inputData}
				onChange={(e) => setInputData(e.target.value)}
				placeholder="Введите текст"
			/>
			<input
				type="text"
				value={inputData2}
				onChange={(e) => setInputData2(e.target.value)}
			/>
		</div>
	);
};

export default Headers;