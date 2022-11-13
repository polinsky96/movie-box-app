import theMovieDb from "../theMovieDb";

export default function getDetails(option, success, error) {
    'use strict';
    
    theMovieDb.common.validateRequired(arguments, 2, option, ['id']);
    theMovieDb.common.validateCallback(success, error);

    theMovieDb.common.client({
        url: `/movie/${option.id}` + theMovieDb.common.generateQuery(option)
    },
    success,
    error); 
}