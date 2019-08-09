import { TYPES } from 'modules/social-network-media/constants';
import { youtubeSearchByKeyword } from './youtube';

/**
 * Api Search Factory
 *
 * @param {String} type - search type
 * @param {String} keyword - seatch keyword
 *
 * @return {Object}
 * */
export const searchByKeyword = (type, keyword) => {
    switch (type) {
        case TYPES.YOUTUBE: {
            return youtubeSearchByKeyword(keyword);
        }
        default: {
            console.info(`searchByKeyword: undelegated type ${type}`);
        }
    }

    return false;
};
