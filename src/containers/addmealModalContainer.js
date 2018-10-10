import { connect } from 'react-redux';
import AddMealModal from '../components/addMealModal';
import { getGuests } from '../selectors';

const mapStateToProps = (state, props) => ({
    registeredGuests: getGuests(state, props)
});

export default connect(mapStateToProps)(AddMealModal);