import { createSelector } from 'reselect';

//TODO find a way to put meals at root of store
export const getMeals = state => state.meals.meals;

//TODO find a way to put guests at root of store
export const getGuests = state => state.guests.guests;

//getMealId
//getGuestsIds
//getGuestsNamesById

export const getGuestById = createSelector(
    [getGuests],
    guests => guests.find(guest => guest.id === 1)
);