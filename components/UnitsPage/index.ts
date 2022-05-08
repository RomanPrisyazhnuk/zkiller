import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { getAuthorsAction } from '../../store/redux/actionCreators/actionCreators';
import { GetAuthorsData } from '../../store/redux/actionTypes/actionTypes';
import UnitsPage from './UnitsPage';

export type TPropsFromDispatch = {
  getAuthors: () => Action<GetAuthorsData>;
};

const mapStateToProps = (state: AppState) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getAuthors: () => dispatch(getAuthorsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnitsPage);
