import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { gainMoney, saveLastBattleResult } from '../../store/redux/actionCreators/actionCreators';
import ResultsPage from './ResultsPage';
import { EnemyArmyType } from '../../models/Army';

export type TPropsFromDispatch = {
  saveLastBattleResult: (enemyArmy:EnemyArmyType) => {},
  gainMoney: (money:number) => {},
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  saveLastBattleResult: (enemyArmy: EnemyArmyType) => dispatch(saveLastBattleResult(enemyArmy)),
  gainMoney: (money: number) => dispatch(gainMoney(money)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
