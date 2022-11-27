import theMovieDb from "../theMovieDb";

export default async function getDetails(option, success, error) {
    'use strict';
    
    theMovieDb.common.validateRequired(arguments, 2, option, ['id']);
    theMovieDb.common.validateCallback(success, error);

    await theMovieDb.common.client({
        url: `/person/${option.id}` + theMovieDb.common.generateQuery(option)
    },
    success,
    error); 
}