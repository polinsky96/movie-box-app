import theMovieDb from "../theMovieDb/theMovieDb";

export default function getGenresList(genres) {
    return genres.map(genre => genre.name);
} 

