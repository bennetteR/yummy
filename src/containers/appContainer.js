import { connect } from 'react-redux';
import App from '../App';
import { fetchAllMeals } from '../actions/actions';

const mapStateToProps = (state) => ({
    meals: state.meals
  });

const mapDispatchToProps = {
    fetchAllMeals
}

export default connect(mapStateToProps, mapDispatchToProps)(App);