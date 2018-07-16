import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    fetchArticles, 
    loadMore, 
    addArticleMark
} from './../actions';
import {getArticles} from './../selectors/selectors';

class Articles extends Component {
    componentDidMount() {
        this.props.fetchArticles();
    }

    renderArticle = (article, index) => {
        const {addArticleMark} = this.props;
        const excerpt = `${R.take(60, article.description)}...`;

        return (
            <div key={index}>
                <p>{excerpt}</p>
                <button className="btn" onClick={() => addArticleMark(article.id)}>
                    <FontAwesomeIcon icon="thumsbup" />
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
    addArticleMark
}

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
