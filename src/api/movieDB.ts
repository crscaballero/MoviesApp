import axios from 'axios';

const movieDB = axios.create({
	baseURL: 'https://api.themoviedb.org/3/movie',
	// headers: {
	// 	Accept: 'application/json',
	// 	'Content-Type': 'application/json',
	// },
	params: {
		api_key: 'c1e1e610cd919880e12ddf6cc377229d',
		// language: 'en',
	},
});

export default movieDB;
