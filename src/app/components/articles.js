import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import {
    fetchArticles, 
    loadMore, 
    addArticleLike
} from './../actions';
import {getArticles} from './../selectors/selectors';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticle = (article, index) => {
        const {addArticleLike} = this.props;
        const excerpt = `${R.take(60, article.description)}...`;

        return (
            <div key={index}>
                <Link to={`/${article.id}`}>
                    <p>{excerpt}</p>
                </Link>
                <button onClick={() => addArticleLike(article.id)}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </button>
            </div>
        )
    }

    render() {
        const {articles, loadMore} = this.props;

        return (
            <div>
                <div>
                    {articles.map((article, index) => this.renderArticle(article, index)
                    )}
                </div>
                <button onClick={loadMore}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        articles: getArticles(state)
    }
}

const mapDispatchToProps = {
    fetchArticles,
    loadMore,
    addArticleLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
