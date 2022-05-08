import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import ArticlesPage from './ArticlesPage';
import { getArticlesAction } from '../../store/redux/actionCreators/actionCreators';
import { GetArticlesData } from '../../store/redux/actionTypes/actionTypes';

export type TPropsFromDispatch = {
  getArticles: () => Action<GetArticlesData>;
};

const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  gender: state.gender,
});
const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getArticles: () => dispatch(getArticlesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
