import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import LikeWidget from './likeWidget';

import {
    fetchArticleById,
    addArticleLike
} from './../actions';
import {getArticleById} from './../selectors/selectors';

class Article extends Component {
    componentDidMount() {
        this.props.fetchArticleById(this.props.params.id);
    }

    render() {
        const {article} = this.props;
        console.log(article);
        return (
            <div>
                <div>
                    <LikeWidget />
                    <Link to="/">
                        Back to Articles
                    </Link>
                    <button onClick={() => addArticleLike(article.id)}>
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                </div>
                <div>
                    {article}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: getArticleById(state, state.articleItems.id)
})

const mapDispatchToProps = {
    fetchArticleById,
    addArticleLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
