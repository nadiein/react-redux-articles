import R from 'ramda';

export const getArticleById = (state, id) => R.prop(id, state.articles);

export const getArticles = state => {
    const articles = R.map(id => getArticleById(state, id), state.articleItems.ids)
    return articles
}

export const getRenderedArticlesLength = state => R.length(state.articlesPage.ids);

export const getTotalMarks = state => {
    const totalMarks = R.compose(
        R.pluck('name'),
        R.map(id => getArticleById(state, id))
    )(state.marks)
    return totalMarks
}