import axios from "axios";

import search from "./search/search";
import movies from "./movies/movies";
import tv from "./tv/tv";

const theMovieDb = {}

theMovieDb.common = {
    api_key: '7dcbb8db2c753d5e7513566e4edb1622',
    base_url: 'https://api.themoviedb.org/3',
    images_url: 'https://image.tmdb.org/t/p',
    language: 'en-US',

    generateQuery: function(option) {
        'use strict';
        const myOptions = option || {};
        let query; 

        query = "?api_key=" + theMovieDb.common.api_key + "&language=" + theMovieDb.common.language;

        if (Object.keys(myOptions).length > 0) {
            for (let option in myOptions) {
                if (Object.prototype.hasOwnProperty.call(myOptions, option) && option !== "id" && option !== "body") {
                    query = query + "&" + option + "=" + myOptions[option];
                }
            }
        }

        return query;
    },

    validateCallback(success, error) {
        'use strict';
        if (typeof success != 'function' && typeof error != 'function') {
            throw "success and error parameters must be functions!";
        }
    },

    validateRequired: function(args, argsReq, opt, optReq) {
        'use strict';

        const myOption = opt || null;
        
        if (args.length < argsReq) {
            throw `The method requires ${argsReq} arguments and you are sending ${args.length}!`;
        }

        if (myOption) {
            for (let i = 0; i < optReq.length; i++) {
                if (!Object.prototype.hasOwnProperty.call(opt, optReq[i])) {
                    throw `<${optReq[i]}> is a required parameter and is not present in the options!`;
                }
            }
        }
    },

    getImage: function(options) {
        'use strict';
        const defaultSize = 'w500';

        return `${theMovieDb.common.images_url}/${options.size || defaultSize}${options.file}`;
    },

    client: async function(option, success, myError) {
        'use strict';
        
        try {
            const response = await axios.get(theMovieDb.common.base_url + option.url);
            success(response.data);
        } catch (error) {
            if (myError) {
                myError(error);
            }
            throw error
        }
    }
}

theMovieDb.typeContent = {
    movie: 'movie',
    tv: 'tv',
    person: 'person'
}
theMovieDb.search = search;
theMovieDb.movies = movies;
theMovieDb.tv = tv;

export default theMovieDb;