import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Item = ({ link, text, onClick }) => {
	const clickHandler = useCallback(
		() => {
			onClick(link);
		},
		[link],
	);
	return (
		<div className={styles.link} onClick={clickHandler}>
			{text}
		</div>
	);
};

Item.propTypes = {
	link: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default memo(Item);
