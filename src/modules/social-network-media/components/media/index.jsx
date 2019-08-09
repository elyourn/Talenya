import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Media = ({ src }) => (
    <div className={styles.media}>
        <iframe
            width="560"
            height="315"
            title="media"
            src={src}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
        />
    </div>
);

Media.propTypes = {
    src: PropTypes.string.isRequired,
};

export default memo(Media);
