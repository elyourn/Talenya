import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Label = ({ text }) => <div className={styles.label}>{text}</div>;

Label.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Label;
