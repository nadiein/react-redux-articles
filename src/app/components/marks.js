import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bookmarks = () => {
    return (
        <div className="bookmark">
            <FontAwesomeIcon icon='thumbsup' onClick={() => addArticleMark(article.id)} />
        </div>
    );
}

export default Bookmarks;
