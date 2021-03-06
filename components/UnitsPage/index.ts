import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { gainMoney, saveLastBattleResult } from '../../store/redux/actionCreators/actionCreators';
import { GetAuthorsData } from '../../store/redux/actionTypes/actionTypes';
import UnitsPage from './UnitsPage';
import { EnemyArmyType } from '../../models/Army';

export type TPropsFromDispatch = {
  getAuthors: () => Action<GetAuthorsData>;
  saveLastBattleResult: () => {},
  gainMoney: () => {},
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  saveLastBattleResult: (enemyArmy: EnemyArmyType) => dispatch(saveLastBattleResult(enemyArmy)),
  gainMoney: (money: number) => dispatch(gainMoney(money)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsPage);
