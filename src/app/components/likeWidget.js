import React from 'react';
import {connect} from 'react-redux';

import {
    getTotalLikes
} from './../selectors/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const LikeWidget = ({totalLikes}) => {
    return (
        <div className="Like">
            <FontAwesomeIcon icon={faThumbsUp} />
            <div>{`Liked: ${totalLikes}...`}</div>
        </div>
    );
}

const mapStateToProps = state => ({
    totalLikes: getTotalLikes(state)
})

export default connect(mapStateToProps, null)(LikeWidget);
