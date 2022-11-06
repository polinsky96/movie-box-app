import theMovieDb from "../theMovieDb";
import searchMovies from "./searchMovies";
import searchTv from "./searchTv";
import searchPerson from "./searchPerson";

const search = {
    searchContentSelectType: async function(type, option, success, error) {
        'use strict';

        theMovieDb.common.validateRequired(arguments, 3, option, ['query']);
        theMovieDb.common.validateCallback(success, error);

        if (type === theMovieDb.typeContent.movie) {
            await search.searchMovies(option, success, error);
        }

        if (type === theMovieDb.typeContent.tv) {
            await search.searchTv(option, success, error);
        }

        if (type === theMovieDb.typeContent.person) {
            await search.searchPerson(option, success, error);
        }
    }
};

search.searchMovies = searchMovies;
search.searchTv = searchTv;
search.searchPerson = searchPerson;

export default search;