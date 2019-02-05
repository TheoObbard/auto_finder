import { connect } from 'react-redux';
import Map from './map';
import { addPin } from '../../actions/pin_actions';

const mapDispatchToProps = dispatch => {
  return {
    addPin: (x, y) => dispatch(addPin(x, y))
  }
};

export default connect(null, mapDispatchToProps)(Map)