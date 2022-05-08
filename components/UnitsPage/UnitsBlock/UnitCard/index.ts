import { connect } from 'react-redux';
import { Action, AnyAction, Dispatch } from 'redux';
import {
  lossMoney, gainUnit, gainLevel,
} from '../../../../store/redux/actionCreators/actionCreators';
import UnitCard from './UnitCard';
import { AppState } from '../../../../store/rootReducer';

export type TPropsFromDispatch = {
  lossMoney: (cost: number) => Action<AnyAction>;
  gainUnit: (id: number, amount: number) => Action<AnyAction>;
  gainLevel: (id: number) => Action<AnyAction>;
};

const mapStateToProps = (state: AppState, ownProps) => () => {
  return({
    unit: state.user.army[ownProps.id],
    count: state.user.army[ownProps.id].count,
    level: state.user.army[ownProps.id].level,
  });
}

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  lossMoney: (cost: number) => dispatch(lossMoney(cost)),
  gainUnit: (id: number, amount: number) => dispatch(gainUnit(id, amount)),
  gainLevel: (id: number) => dispatch(gainLevel(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitCard);
