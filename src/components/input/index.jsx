import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.scss';

const Input = ({ name, placeholder, onChange, type }) => (
	<input
		id={name}
		name={name}
		type={type}
		className={styles.input}
		placeholder={placeholder}
		onChange={onChange}
	/>
);

Input.propTypes = {
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
	type: 'text',
	placeholder: '',
};

export default Input;
