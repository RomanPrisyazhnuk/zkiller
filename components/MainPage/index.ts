import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import MainPage from './MainPage';
import { GetCategoriesData } from '../../store/redux/actionTypes/actionTypes';
import { getCategoriesAction } from '../../store/redux/actionCreators/actionCreators';

export type TPropsFromDispatch = {
  getCategories: () => Action<GetCategoriesData>;
};

const mapStateToProps = (state: AppState) => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getCategories: () => dispatch(getCategoriesAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
