import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../../store/rootReducer';
import { getArticlesByCategoryAction, getQuestionsAction } from '../../../store/redux/actionCreators/actionCreators';
import { GetArticlesByCategoryData, GetQuestionsData } from '../../../store/redux/actionTypes/actionTypes';
import CategoryBlock from './CategoryBlock';

export type TPropsFromDispatch = {
  getArticlesByCategory: (id: string, seoId: string) => Action<GetArticlesByCategoryData>;
  getQuestions: () => Action<GetQuestionsData>;
};

const mapStateToProps = (state: AppState) => ({
  articles: state.articles,
  questions: state.questions,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  //@ts-ignore
  getArticlesByCategory: (id, seoId) => dispatch(getArticlesByCategoryAction(id, seoId)),
  getQuestions: () => dispatch(getQuestionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBlock);
