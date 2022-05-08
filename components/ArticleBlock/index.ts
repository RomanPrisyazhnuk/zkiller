import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { getArticleAction, getAuthorByIdAction } from '../../store/redux/actionCreators/actionCreators';
import { GetArticleData, GetAuthorByIdData } from '../../store/redux/actionTypes/actionTypes';
import ArticleBlock from './ArticleBlock';

export type TPropsFromDispatch = {
  getArticle: (id: string) => Action<GetArticleData>;
  getAuthorById: (id: string, articleSeoId: string) => Action<GetAuthorByIdData>;
};

const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  authors: state.authors,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getArticle: (seoId: string) => dispatch(getArticleAction(seoId)),
  //@ts-ignore
  getAuthorById: (id: string, articleSeoId: string) => dispatch(getAuthorByIdAction(id, articleSeoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleBlock);
