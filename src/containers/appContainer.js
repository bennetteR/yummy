import { connect } from 'react-redux';
import App from '../App';
import { fetchAllMeals, fetchAllGuests } from '../actions/actions';

const mapStateToProps = (state) => ({
    meals: state.meals,
    guests: state.guests
  });

const mapDispatchToProps = {
    fetchAllMeals,
    fetchAllGuests
}

export default connect(mapStateToProps, mapDispatchToProps)(App);