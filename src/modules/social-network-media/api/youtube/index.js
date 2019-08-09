import { get } from 'api';
import { getYouTubeSearchAPIUrl, normalizeYoutubeData } from './utils';

/**
 * @param {String} keyword - search keyword
 *
 * @return {Object}
 * */

export const youtubeSearchByKeyword = async (keyword) => {
	const { data } = await get(getYouTubeSearchAPIUrl(keyword));
	return normalizeYoutubeData(data);
};
