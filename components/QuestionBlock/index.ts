import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { getQuestionAction } from '../../store/redux/actionCreators/actionCreators';
import { GetQuestionData } from '../../store/redux/actionTypes/actionTypes';
import QuestionBlock from './QuestionBlock';

export type TPropsFromDispatch = {
  getQuestion: (id: string) => Action<GetQuestionData>;
};

const mapStateToProps = (state: AppState) => ({
  questions: state.questions,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getQuestion: (id: string) => dispatch(getQuestionAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionBlock);
