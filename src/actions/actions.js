import * as data from '../data/data.json'

export const FETCH_ALL_MEALS = 'FETCH_ALL_MEALS';
function fetchAllMealsSuccess(meals) {
//ou 
//function fetchAllMealsSuccess({meals}) {
  return {
    type: FETCH_ALL_MEALS,
    meals
  };
}

export function fetchAllMeals() {
    return (dispatch) => {
        dispatch(fetchAllMealsSuccess(data.meals)); 
    };
}

export const FETCH_ALL_GUESTS = 'FETCH_ALL_GUESTS';
function fetchAllGuestsSuccess(guests) {
  return {
    type: FETCH_ALL_GUESTS,
    guests
  };
}

export function fetchAllGuests() {
    return (dispatch) => {
        dispatch(fetchAllGuestsSuccess(data.guests)); 
    };
}