import { createForms } from 'react-redux-form';
import { combineReducers } from 'redux';
import meals from './meals';

const initialMealState = {
    date: undefined,
    guests: [],
    daytime: 'Midi',
    dishes: []
  };

export default combineReducers({
    meals,
    ...createForms({
        meal: initialMealState
    })
});
