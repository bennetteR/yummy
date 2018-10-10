const initialState = {
    meals: []
  }

export default (state = initialState, action) => {
    const { meals } = action;
    switch(action.type) {
        case 'FETCH_ALL_MEALS' :
            return {
                ...state,
                meals
            }
        default:
            return state;
    }
}