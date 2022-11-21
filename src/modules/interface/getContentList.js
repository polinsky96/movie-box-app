import getContentTypesList from './getContentTypesList';
import getMovieList from './getMovieList';
import getTvList from './getTvList';
import getPersonList from './getPersonList';

export default async function getContentList(type, option) {
    const contentType = getContentTypesList();
    
    if (type === contentType.movie) {
        return await getMovieList(option); 
    }
    
    if (type === contentType.tv) {
        return await getTvList(option);
    }

    if (type === contentType.person) {
        return await getPersonList(option);
    }
}