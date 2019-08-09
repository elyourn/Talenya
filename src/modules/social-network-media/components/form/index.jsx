import React, { useRef, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import { TEXTS } from 'constant';
import Input from 'components/input';
import Label from 'components/label';

import styles from './index.scss';

const Form = ({ type, onLinkChange }) => {
    const delayedOnLinkChange = useRef(debounce((id, value) => onLinkChange(id, value), 300))
        .current;

    const onChange = useCallback(
        (e) => {
            const { value } = e.target;
            delayedOnLinkChange(type, value);
        },
        [type],
    );

    return (
        <div className={styles.form}>
            <Label text={TEXTS.FORM_LABEL} />
            <Input name={`embed_${type}`} onChange={onChange} />
        </div>
    );
};

Form.propTypes = {
    type: PropTypes.string.isRequired,
    onLinkChange: PropTypes.func.isRequired,
};

export default memo(Form);
