import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';
import meals from './meals';
import guests from './guests';

const initialMealState = {
    date: undefined,
    guests: [],
    daytime: 'Midi',
    dishes: []
  };

export default combineReducers({
    meals,
    guests,
    ...createForms({
        meal: initialMealState
    })
});
