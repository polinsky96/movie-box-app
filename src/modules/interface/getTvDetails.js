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

    console.log(response);
    // let {
    //     original_name: title,
    //     poster_path: posterPath,
    //     backdrop_path: backdropPath,
    //     release_date: releaseDate,
    //     vote_average: rating,
    //     overview,
    //     id,
    //     genres,
    //     runtime,
    //     tagline } = response;


    // return {
    //     id,
    //     title,
    //     overview,
    //     genres,
    //     releaseDate,
    //     rating,
    //     runtime, 
    //     posterPath,
    //     backdropPath,
    //     tagline
    // }
} 