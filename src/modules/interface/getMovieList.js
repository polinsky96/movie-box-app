import theMovieDb from "../theMovieDb/theMovieDb";

export default async function getMovieList(option) {
    let response;

    await theMovieDb.search.searchMovies(
        option, 
        (data) => {
            response = data
        }, 
        (error) => {
            throw error; 
        });
    
    let {total_pages: totalPages, page, results} = response;

    results = results.map( result => {
        return {
            title: result.title,
            id: result.id,
            releaseDate: result.release_date,
            rating: result.vote_average,
            overview: result.overview,
            posterPath: result.poster_path
        }
    })

    return {
        results,
        page,
        totalPages,
        type: 'movie'
    }
}