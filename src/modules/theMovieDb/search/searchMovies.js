import theMovieDb from "../theMovieDb";

export default async function searchMovies(option, success, error) {
    'use strict';
    
    theMovieDb.common.validateRequired(arguments, 2, option, ['query']);
    theMovieDb.common.validateCallback(success, error);

    await theMovieDb.common.client({
        // url: `/search/movie` + theMovieDb.common.generateQuery(option),
        url: `/search/movie` + theMovieDb.common.generateQuery(option),
    },
    success,
    error);
}