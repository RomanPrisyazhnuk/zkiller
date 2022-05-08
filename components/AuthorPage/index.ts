import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { getArticlesByUserAction, getAuthorAction } from '../../store/redux/actionCreators/actionCreators';
import { GetArticlesByUserData, GetAuthorData } from '../../store/redux/actionTypes/actionTypes';
import AuthorPage from './AuthorPage';

export type TPropsFromDispatch = {
  getArticlesByUserId: (id: string, seoId: string) => Action<GetArticlesByUserData>;
  getAuthor: (seoId: string) => Action<GetAuthorData>;
};

const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  authors: state.authors,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  //@ts-ignore
  getArticlesByUserId: (id: string, seoId: string) => dispatch(getArticlesByUserAction(id, seoId)),
  getAuthor: (seoId: string) => dispatch(getAuthorAction(seoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
