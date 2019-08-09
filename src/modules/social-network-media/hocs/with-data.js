import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { searchByKeyword } from 'modules/social-network-media/api';

const withData = (WrappedComponent) => {
    const withDataHOC = (props) => {
        const [linksList, setLinksList] = useState([]);
        const getLinks = useCallback(async (keyword) => {
            const data = await searchByKeyword(props.type, keyword);
            if (data) {
                setLinksList(data);
            } else {
                console.info(`data by keyword: ${keyword} not found`);
            }
        }, []);

        return <WrappedComponent linksList={linksList} getLinks={getLinks} {...props} />;
    };

    withDataHOC.propTypes = {
        type: PropTypes.string.isRequired,
    };

    withDataHOC.displayName = `withDataHOC(
      ${WrappedComponent.displayName || WrappedComponent.name || 'Component'}
    )`;
    return withDataHOC;
};

export default withData;
