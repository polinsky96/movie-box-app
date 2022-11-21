import theMovieDb from "../theMovieDb/theMovieDb";

export default async function getPersonList(option) {
    let response;

    await theMovieDb.search.searchPerson(
        option, 
        (data) => {
            response = data
        }, 
        (error) => {
            throw error; 
        });

    let {total_pages: totalPages, page, results} = response;

    results = results.map( result => {
        const knownFor = result.known_for.map( item => {
            return {
                id: item.id,
                title: item.original_name || item.original_title,
                posterPath: item.poster_path,
            }
        });

        return {
            id: result.id,
            name: result.name,
            profilePath: result.profile_path,
            department: result.known_for_department,
            knownFor
        }
    })

    return {
        results,
        page,
        totalPages
    }
}