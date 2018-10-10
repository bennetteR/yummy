import { connect } from 'react-redux';
import Daytime from '../components/daytime';

const mapStateToProps = (state) => ({
    guests: state.guests
  });

export default connect(mapStateToProps)(Daytime);