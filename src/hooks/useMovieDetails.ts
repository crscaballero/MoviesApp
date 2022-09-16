import {useState, useEffect} from 'react';

import movieDB from '../api/movieDB';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast, CreditsResponse} from '../interfaces/creditInterface';

interface MovieDetails {
	isLoading: boolean;
	movieFull?: MovieFull;
	cast?: Cast[];
}

/**
 * Hook that get the detail from an specific movie given its ID from `themoviedb` and retrieve it
 */
export const useMovieDetails = (movieId: number) => {
	const [state, setState] = useState<MovieDetails>({
		isLoading: true,
		movieFull: undefined,
		cast: [],
	});

	const getMovieDetails = async () => {
		const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
		const castPromise = await movieDB.get<CreditsResponse>(`/${movieId}/credits`);
		const [movieDetailsResp, castPromiseResp] = await Promise.all([
			movieDetailsPromise,
			castPromise,
		]);
		setState({
			isLoading: false,
			movieFull: movieDetailsResp.data,
			cast: castPromiseResp.data.cast,
		});
	};

	useEffect(() => {
		getMovieDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

  return {
		...state,
		getMovieDetails,
	};
};
