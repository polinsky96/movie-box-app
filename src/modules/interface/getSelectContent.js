import theMovieDb from '../theMovieDb/theMovieDb';

export default theMovieDb.search.searchContentSelectType(
    typeContent.value,

    { 
        query: query, 
        page: page
    },
    (response) => {
        resultsData.value = response;
    }
)
