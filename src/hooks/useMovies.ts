import {useEffect, useState} from 'react';

import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesPlaying, setMoviesPlaying] = useState<Movie[]>([]);

    const getMovies = async () => {
        const result = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setMoviesPlaying(result.data.results);
        setIsLoading(false);
    };

    useEffect(() => {
		getMovies();
	}, []);

    return {
        moviesPlaying,
        isLoading,
        getMovies,
    };
};
