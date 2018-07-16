import {
    FETCH_ARTICLES_START,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
    LOAD_MORE_START,
    LOAD_MORE_SUCCESS,
    LOAD_MORE_FAILURE,
    ADD_ARTICLE_MARK
} from './../../actionTypes';

import {getRenderedArticlesLength} from '../selectors/selectors';
import {
    fetchArticles as fetchArticlesApi,
    loadMoreArticles as loadMoreArticlesApi,
    fetchArticleById as fetchArticleByIdApi
} from '../api';

export const fetchArticles = () => async dispatch => {
    dispatch({type: FETCH_ARTICLES_START})

    try {
        const articles = await fetchArticlesApi()
        dispatch({
            type: FETCH_ARTICLES_SUCCESS,
            payload: articles
        })
    } catch(err) {
        dispatch({
            type: FETCH_ARTICLES_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const loadMore = () => async (dispatch, getState) => {
    const offset = getRenderedArticlesLength(getState());

    dispatch({type: LOAD_MORE_START})

    try {
        const articles = await loadMoreArticlesApi({offset})
        dispatch({
            type: LOAD_MORE_SUCCESS,
            payload: articles
        })
    } catch(err) {
        dispatch({
            type: LOAD_MORE_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const addArticleMark = (id) => dispatch => {
    dispatch({
        type: ADD_ARTICLE_MARK, 
        payload: id
    })
}