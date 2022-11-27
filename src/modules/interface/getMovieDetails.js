import theMovieDb from '../theMovieDb/theMovieDb';

export default async function getMovieDetails(option) {
    let response;

    await theMovieDb.movies.getDetails(
        option, 
        (data) => {
            response = data
        }, 
        (error) => {
            throw error; 
        });
    
    let {
        original_title: title,
        poster_path: posterPath,
        backdrop_path: backdropPath,
        release_date: releaseDate,
        vote_average: rating,
        overview,
        id,
        genres,
        runtime,
        tagline } = response;

    
    genres = genres.map(genre => genre.name);

    return {
        id,
        title,
        overview,
        genres,
        releaseDate,
        rating,
        runtime, 
        posterPath,
        backdropPath,
        tagline
    }
} 