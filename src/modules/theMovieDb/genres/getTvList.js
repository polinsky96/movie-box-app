import theMovieDb from "../theMovieDb";

export default async function getTvList(success, error) {
    await theMovieDb.common.client(
        { 
            url: `/genre/tv/list` + theMovieDb.common.generateQuery()  
        },
        success,
        error);
}