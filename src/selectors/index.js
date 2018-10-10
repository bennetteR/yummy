import { createSelector } from 'reselect';

export const getMeals = state => state.meals;

export const getGuests = createSelector(
    [getMeals],
    meals => {
        console.log(meals)
        console.log(meals[0])
        return meals.map(meals.guests)
    }
);