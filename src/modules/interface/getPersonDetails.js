import theMovieDb from '../theMovieDb/theMovieDb';

export default async function getPersonDetails(option) {
    let response;

    await theMovieDb.person.getDetails(
        option,
        (data) => {
            response = data
        },
        (error) => {
            throw error;
        });

    let {
        name: name,
        profile_path: profilePath,
        known_for_department: department,
        place_of_birth: placeOfBirth,
        id,
        biography, 
        birthday,
        deathday
        } = response;


    return {
        name,
        profilePath,
        department,
        id,
        biography, 
        birthday,
        deathday,
        placeOfBirth
    }
} 