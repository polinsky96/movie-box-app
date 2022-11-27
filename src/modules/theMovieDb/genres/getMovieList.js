import theMovieDb from "../theMovieDb";

export default async function getMovieList(success, error) {
    await theMovieDb.common.client(
        { 
            url: `/genre/movie/list` + theMovieDb.common.generateQuery() 
        },
        success,
        error);
}