import meals from '../data/data.json'

export const FETCH_ALL_MEALS = 'FETCH_ALL_MEALS';
function fetchAllMealsSuccess({ meals }) {
  console.log(meals)
//ou 
//function fetchAllMealsSuccess({meals}) {
  return {
    type: FETCH_ALL_MEALS,
    meals
  };
}

export function fetchAllMeals() {
    return (dispatch) => {
        dispatch(fetchAllMealsSuccess(meals)); 
    };
}