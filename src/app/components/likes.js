import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Likes = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faThumbsUp} onClick={() => addArticleLike(article.id)} />
        </div>
    );
}

export default Likes;
