import theMovieDb from '../theMovieDb/theMovieDb';

export default async function getTvDetails(option) {
    let response;

    await theMovieDb.tv.getDetails(
        option, 
        (data) => {
            response = data
        }, 
        (error) => {
            throw error; 
        });

    let {
        original_name: title,
        poster_path: posterPath,
        backdrop_path: backdropPath,
        first_air_date: releaseDate,
        vote_average: rating,
        episode_run_time: runtime,
        overview,
        id,
        genres,
        tagline } = response;

    
    genres = genres.map(genre => genre.name);
    runtime = runtime[0];

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