import React, { useState, useCallback } from 'react';

import { TEXTS } from 'constant';
import { TYPES } from './constants';

import Form from './components/form';
import Media from './components/media';
import Search from './components/search';

import styles from './index.scss';

import { isValidLink, transformLinkToEmbed } from './services/links-transformer';

const SocialNetworkMedia = () => {
	const [mediaLink, setMediaLink] = useState('');

	const onLinkChange = useCallback((type, link) => {
		if (isValidLink(type, link)) {
			setMediaLink(transformLinkToEmbed(type, link));
		}
	}, []);

	return (
		<div className={styles.root}>
			<h1 className={styles.title}>{TEXTS.TITLE}</h1>
			<div className={styles.content}>
				<div className={styles.leftCol}>
					<Form type={TYPES.YOUTUBE} onLinkChange={onLinkChange} />
					<Search type={TYPES.YOUTUBE} onLinkChange={onLinkChange} />
				</div>
				<div className={styles.rightCol}>
					<Media src={mediaLink} />
				</div>
			</div>
		</div>
	);
};

export default SocialNetworkMedia;
