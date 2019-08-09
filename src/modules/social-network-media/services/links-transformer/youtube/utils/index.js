/**
 * @param {String} link - link to transfrom
 *
 * @return {String} - youtube id
 * */

export const getYouTubeIdFromLink = (link) => {
	/* eslint-disable */
	const regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
	const match = link.match(regExp);
	/* eslint-enable */
	return match[1];
};
