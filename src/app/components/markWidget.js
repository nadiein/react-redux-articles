import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {
    getTotalMarks
} from './../selectors/selectors';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MarkWidget = ({totalMarksCount, totalMarks}) => {
    return (
        <div className="bookmark">
            <FontAwesomeIcon icon="thumbsup" />
            <div>{`Bookmarked: ${totalMarks}...`}</div>
        </div>
    );
}

const mapStateToProps = state => ({
    totalMarks: getTotalMarks(state)
})

export default connect(mapStateToProps, null)(MarkWidget);
