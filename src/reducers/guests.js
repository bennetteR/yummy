const initialState = {
    guests: []
  }

export default (state = initialState, action) => {
    const { guests } = action;
    switch(action.type) {
        case 'FETCH_ALL_GUESTS' :
            return {
                ...state,
                guests
            }
        default:
            return state;
    }
}