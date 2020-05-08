
const initialState = {
    users: [],
    id:0
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case 'USERS_LOADED':
            return {
                ...state,
                users:[...state.users, ...action.payload]
            };
        case 'ID_INCREMENT':
            return {
                ...state,
                id: state.id + 1
            };
        default:
            return state;
    }
};

export default reducer;
