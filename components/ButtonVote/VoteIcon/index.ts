import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { updateAnswersCountsAction } from '../../../store/redux/actionCreators/actionCreators';
import { IUpdateAnswersCounts } from '../../../store/redux/actionTypes/actionTypes';
import VoteIcon from './VoteIcon';

export type TPropsFromDispatch = {
  updateAnswersCounts: (id: string) => Action<IUpdateAnswersCounts>;
};

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  updateAnswersCounts: (id: string) => dispatch(updateAnswersCountsAction(id)),
});

export default connect(null, mapDispatchToProps)(VoteIcon);
