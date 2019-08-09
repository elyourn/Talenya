import { TYPES } from 'modules/social-network-media/constants';
import { isYouTubeValidLink, transformYouTubeLinkToEmbed } from './youtube';
/**
 * Validation Factory
 *
 * @param {String} type - validation type
 * @param {String} src - string for test
 *
 * @return {Boolean}
 * */
export const isValidLink = (type, str) => {
	switch (type) {
		case TYPES.YOUTUBE: {
			return isYouTubeValidLink(str);
		}
		default: {
			console.info(`isValidLink: undelegated type ${type}`);
		}
	}

	return false;
};

/**
 * Validation Factory
 *
 * @param {String} type - validation type
 * @param {String} src - string for test
 *
 * @return {String} - embeded link
 * */
export const transformLinkToEmbed = (type, str) => {
	switch (type) {
		case TYPES.YOUTUBE: {
			return transformYouTubeLinkToEmbed(str);
		}
		default: {
			console.info(`transformLinkToEmbed: undelegated type ${type}`);
		}
	}
	return false;
};

export default isValidLink;
