import { connect } from 'react-redux';
import { Action, AnyAction, Dispatch } from 'redux';
import {
  lossMoney, gainUnit,
} from '../../../../store/redux/actionCreators/actionCreators';
import UnitCard from './UnitCard';
import { AppState } from '../../../../store/rootReducer';

export type TPropsFromDispatch = {
  lossMoney: (cost: number) => Action<AnyAction>;
  gainUnit: (id: number, amount: number) => Action<AnyAction>;
};

const mapStateToProps = (state: AppState, ownProps) => () => {
  return({
    unit: state.user.army[ownProps.id],
    count: state.user.army[ownProps.id].count,
  });
}

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  lossMoney: (cost: number) => dispatch(lossMoney(cost)),
  gainUnit: (id: number, amount: number) => dispatch(gainUnit(id, amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitCard);
