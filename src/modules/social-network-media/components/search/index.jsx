import React, { memo, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import Input from 'components/input';
import Label from 'components/label';
import { TEXTS } from 'constant';
import withData from 'modules/social-network-media/hocs/with-data';

import Item from './components/item';

import styles from './index.scss';

const Search = ({ type, linksList, getLinks, onLinkChange }) => {
    const delayedGetLinks = useRef(debounce((value) => getLinks(value), 300)).current;

    const onChange = useCallback((e) => {
        const { value } = e.target;
        if (value.length > 2) {
            delayedGetLinks(value);
        }
    }, []);

    const onClick = useCallback(
        (link) => {
            onLinkChange(type, link);
        },
        [type],
    );

    return (
        <div className={styles.search}>
            <Label text={TEXTS.SEARCH_LABEL} />
            <Input name={type} onChange={onChange} />
            {linksList && (
                <div className={styles.results}>
                    {linksList.map((item, i) => (
                        <Item key={i} text={item.title} link={item.link} onClick={onClick} />
                    ))}
                </div>
            )}
        </div>
    );
};

Search.propTypes = {
    type: PropTypes.string.isRequired,
    linksList: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
        }),
    ).isRequired,
    getLinks: PropTypes.func.isRequired,
    onLinkChange: PropTypes.func.isRequired,
};

export default memo(withData(Search));
