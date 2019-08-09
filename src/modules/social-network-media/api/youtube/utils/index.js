import { getYouTubeEmbededVideoUrl } from 'modules/social-network-media/utils';
import { YOUTUBE_KEY } from '../constants';

export const getYouTubeSearchAPIUrl = (keyword) =>
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${YOUTUBE_KEY}`;

export const normalizeYoutubeData = (data) => {
    if (!data.items.length) {
        return null;
    }
    return data.items.map((item) => ({
        link: getYouTubeEmbededVideoUrl(item.id.videoId),
        title: item.snippet.title,
    }));
};
