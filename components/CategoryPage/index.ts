import { connect } from 'react-redux';
import { AppState } from '../../store/rootReducer';
import CategoryPage from './CategoryPage';
import { Action, Dispatch } from 'redux';
import { GetCategoryBySeoIdData } from '../../store/redux/actionTypes/actionTypes';
import { getCategoryBySeoIdAction } from '../../store/redux/actionCreators/actionCreators';

export type TPropsFromDispatch = {
  getCategoryBySeoId: (seoId: string) => Action<GetCategoryBySeoIdData>;
};

const mapStateToProps = (state: AppState) => ({
  categories: state.categories,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getCategoryBySeoId: (seoId) => dispatch(getCategoryBySeoIdAction(seoId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
