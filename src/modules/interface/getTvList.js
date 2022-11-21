import theMovieDb from "../theMovieDb/theMovieDb";

export default async function getTvList(option) {
    let response;

    await theMovieDb.search.searchTv(
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
            title: result.original_name,
            id: result.id,
            releaseDate: result.first_air_date,
            rating: result.vote_average,
            overview: result.overview,
            posterPath: result.poster_path
        }
    });

    return {
        results,
        page,
        totalPages
    }
}