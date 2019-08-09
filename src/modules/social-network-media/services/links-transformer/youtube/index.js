import { getYouTubeEmbededVideoUrl } from 'modules/social-network-media/utils';
import { getYouTubeIdFromLink } from './utils';
/**
 * @param {String} src - string for test
 *
 * @return {Boolean}
 * */
export const isYouTubeValidLink = (str) => {
    const regEx = /^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/;

    return regEx.test(str);
};

/**
 * @param {String} link - link to transfrom
 *
 * @return {String}
 * */
export const transformYouTubeLinkToEmbed = (link) =>
    getYouTubeEmbededVideoUrl(getYouTubeIdFromLink(link));
