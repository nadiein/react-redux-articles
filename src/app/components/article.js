import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import R from 'ramda';

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

    renderFields = () => {
        const {article} = this.props;

        const articleFields = R.compose(
            R.toPairs,
            R.pick([
                'name',
                'description'
            ])
        )(article);

        return articleFields.map(([key, value]) => (
            <div key={key}>
                {key === 'description' ? <p>{value}</p> : <p>{value}</p>}
            </div>
        ))
    }

    renderContent = () => {
        const {article} = this.props;

        return (
            <div>
                {this.renderFields()}
            </div>
        )
    }

    render() {
        const {article, addArticleLike} = this.props;

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
                    {article && this.renderContent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    article: getArticleById(state, state.articleItem.id)
})

const mapDispatchToProps = {
    fetchArticleById,
    addArticleLike
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
