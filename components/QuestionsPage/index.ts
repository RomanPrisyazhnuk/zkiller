import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import QuestionsPage from './QuestionsPage';
import { getQuestionsAction } from '../../store/redux/actionCreators/actionCreators';
import { GetQuestionsData } from '../../store/redux/actionTypes/actionTypes';

export type TPropsFromDispatch = {
  getQuestions: () => Action<GetQuestionsData>;
};

const mapStateToProps = (state: AppState) => ({
  questions: state.questions,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getQuestions: () => dispatch(getQuestionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
