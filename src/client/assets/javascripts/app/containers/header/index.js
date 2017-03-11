import { connect } from 'react-redux';
import Header from '../../components/Header';
import {searchForHT, updateHT, uploadMedia} from '../../actions';

const mapStateToProps = (state) => {
  return {
    searchValue: state.reducers.searchMovie.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      if (value) {
        dispatch(updateHT(value));
      }
    },
    handleSubmit: (value) => {
      dispatch(searchForHT(value));
    },
    onClick: () => {
      dispatch(uploadMedia());
    }
  };
};

const TopBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default TopBar;
