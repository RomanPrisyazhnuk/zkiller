import { connect } from 'react-redux';
import { Action, Dispatch } from 'redux';
import { AppState } from '../../store/rootReducer';
import { getAuthorsAction } from '../../store/redux/actionCreators/actionCreators';
import { GetAuthorsData } from '../../store/redux/actionTypes/actionTypes';
import AuthorsPage from './AuthorsPage';

export type TPropsFromDispatch = {
  getAuthors: () => Action<GetAuthorsData>;
};

const mapStateToProps = (state: AppState) => ({
  authors: state.authors,
  gender: state.gender,
});

const mapDispatchToProps = (dispatch: Dispatch): TPropsFromDispatch => ({
  getAuthors: () => dispatch(getAuthorsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
